import eth from "../state/eth"; // Network state
import Link from "next/link"; // Routing
// import useWallet from "@hooks/useWallet"; // Loot by wallet
import { default as NextHead } from "next/head"; // Head
import styles from "@styles/components/Summoner.module.scss"; // Layout styles
import { useEffect, useState } from "react";

import type { ReactElement } from "react";
export default function Summoner(): ReactElement {

    const { address, unlock }: { address: string | null; unlock: Function } = eth.useContainer();

    //Local Provider
    const [buttonLoading, setButtonLoading] = useState<boolean>(false); // Button loading
    // const { data, loading, error, collect } = useWallet(address);

    return (
        <div className= {styles.summoner}>
            <h3>
                Summon me daddy
            </h3>
            {/* Button states */}
      {!address ? (
        <button onClick={() => unlock()}>Authenticate</button>
      ) : (<div></div>)
      }
        </div>
    );
}
