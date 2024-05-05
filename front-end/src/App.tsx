import React from "react";
import { Web3ReactProvider } from "@web3-react/core";

import "./App.css";
import { connectors } from "./connectors";
import MetaMaskBtn from "./components/MetaMaskBtn";
import AddLiquidity from "./components/AddLiquidity";

function App() {
  return (
    <Web3ReactProvider connectors={connectors}>
      <div className="App">
        <MetaMaskBtn />
        <AddLiquidity />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
