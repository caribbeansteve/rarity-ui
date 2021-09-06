import eth from "@state/eth"; // Network state
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
      <Head />

      {/* Page header */}
      <Header />

      {/* Render page children */}
      <div>{children}</div>
    </div>
  );
}

function Head(): ReactElement {
  return (
    <NextHead>
      {/* Meta: Primary */}
      <title>{"Rarity - let's go on an adventure"}</title>


      {/* Meta: OG + Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="localhost:3000" />
      <meta property="og:title" content="Rarity - let's go on an adventure" />
      <meta
        property="og:description"
        content="Rarity lets you play the damn game w/o being super shady coder."
      />
      <meta property="og:image" content="https://lootloose.com/meta.png" />

      {/* Meta: Twitter
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://lootloose.com" />
      <meta
        property="twitter:title"
        content="LootLoose — Unbundle Loot Items"
      />
      <meta
        property="twitter:description"
        content="LootLoose lets you unbundle your Loot Bags into individual item NFTs
          or rebundle items into their original Loot Bags."
      />
      <meta property="twitter:image" content="https://lootloose.com/meta.png" />

      {/* Favicon }
      <link rel="shortcut icon" href="/favicon.ico" /> 
      */
      }

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Open+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </NextHead>
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