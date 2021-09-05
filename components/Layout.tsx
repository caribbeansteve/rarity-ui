import eth from "../state/eth"; // Network state
import Link from "next/link"; // Routing
import { default as NextHead } from "next/head"; // Head
import styles from "@styles/components/Layout.module.scss"; // Layout styles

import type { ReactElement } from "react";
export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[];
}): ReactElement {
  return (
    <div>
      {/* HTML Head */}
      {/* <Head /> */}

      {/* Page header */}
      <Header />

      {/* Render page children */}
      <div>{children}</div>
    </div>
  );
}

function Header(): ReactElement {
    // Network state
    const { address, unlock }: { address: string | null; unlock: Function } =
      eth.useContainer();
  
    return (
      <div className={styles.header}>
        {/* Logo */}
        <div className={styles.header__logo}>
          {"Rarity UI - Let's go on an adventure"}
        </div>
  
        {/* Auth button */}
        <div className={styles.header__auth}>
          <button onClick={() => unlock()}>
            {address
              ? // Truncate address if authenticated
                address.substr(0, 6) + "..." + address.slice(address.length - 4)
              : "Authenticate"}
          </button>
        </div>
      </div>
    );
  }