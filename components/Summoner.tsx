import eth from "../state/eth"; // Network state
import Link from "next/link"; // Routing
// import useWallet from "@hooks/useWallet"; // Loot by wallet
import { default as NextHead } from "next/head"; // Head
import styles from "@styles/components/Summoner.module.scss"; // Layout styles
import { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers"; // Providers
import summoner from "@state/summoner"
import * as React from 'react';

import type { ReactElement } from "react";
export default function Summoner(): ReactElement {

    const { provider, address, unlock } = eth.useContainer();
    
    //Local Provider
    const [buttonLoading, setButtonLoading] = useState<boolean>(false); // Button loading
    const [load, setLoaded] = useState<boolean>(false);
    const[id, setId] = useState<string>("");
    const { loadSummoner } = summoner.useContainer();
    
    const handleSubmit = async (e : Event ) => {
        e.preventDefault(); 
        console.log(e.target.name.value);
        const summoner = loadSummoner(e.target.name.value);
        setId(summoner["_xp"]);
    }

    return (
        <div className= {styles.summoner}>
            <h3>
                Summon me daddy
            </h3>
            {/* Button states */}
      {
        !address ? 
            <button onClick={() => unlock()}>Authenticate</button>
        : !load ? 
            <form onSubmit={handleSubmit} >
                <label>Enter Summoner ID ():</label>
                <input id="name"></input>
                <button >Load Summoner</button>
            </form>
            :
            <h1>{id}</h1>
      }
        </div>
    );
}
