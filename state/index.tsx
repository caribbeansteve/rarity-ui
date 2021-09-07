// Imports
import eth from "@state/eth"; // ETH state provider
import summoner from "@state/summoner"; // Loot state provider

// Types
import type { ReactElement } from "react";

// Global state provider
export default function GlobalProvider({
  children,
}: {
  children: ReactElement[];
}): ReactElement {
  return (
    <eth.Provider>
      <summoner.Provider>{children}</summoner.Provider>
      {/* <div>{children}</div> */}
    </eth.Provider>
  );
}

// Original, replace loot with rarity. Export individual providers
// export { eth, loot };

// Export individual providers
export { eth }; 