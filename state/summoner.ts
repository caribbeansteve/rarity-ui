import { eth } from "@state/index"; // Eth state container
import { toast } from "react-toastify"; // Toast notifications
import { createContainer } from "unstated-next"; // State management
import { Contract } from "@ethersproject/contracts"; // Ethers
import { rarity_Contract } from "@utils/abi";

const rarityAddress : string = "0xce761D788DF608BD21bdd59d6f4B54b2e27F25Bb";


function useRarity() {
    const {provider, address, setAddress } = eth.useContainer();

    function collectContracts() : {rarity : Contract} {
        return {
            rarity : new Contract(rarityAddress, rarity_Contract, provider?.getSigner()),};
        }
    }
}