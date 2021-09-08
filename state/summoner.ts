import { eth } from "@state/index"; // Eth state container
import { toast } from "react-toastify"; // Toast notifications
import { createContainer } from "unstated-next"; // State management
import { Contract } from "@ethersproject/contracts"; // Ethers
import { rarity_Contract } from "@utils/abi";
import { useState } from "react";
import { ethers, BigNumber } from "ethers";

const rarityAddress : string = "0xce761D788DF608BD21bdd59d6f4B54b2e27F25Bb";

export type raritySummoner = {
    _xp : BigNumber,
    _class : BigNumber,
    _level : BigNumber,
    _log : BigNumber
};

function useRarity() {
    const {provider, address, setAddress } = eth.useContainer();

    function collectContracts() : {rarity : Contract} {
        return {
            rarity : new Contract(rarityAddress, rarity_Contract, provider?.getSigner()),
        };
    }

    async function loadSummoner(id : string) : Promise<void> {
        const { rarity } : { rarity : Contract } = collectContracts();
        try {
            if(!address) {
                throw new Error("User not authenticated");
            }
            const tx = await rarity["summoner(uint256)"] ( id );
            // await tx.wait(1);
            return tx;

        } catch (e) {
            console.error(e);
            toast.error(`Error when loading Summoner #${id}`);
        }
    }

    return {
        loadSummoner,
    };
}

const summoner = createContainer(useRarity);
export default summoner;