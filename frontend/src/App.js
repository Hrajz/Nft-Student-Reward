
import React, { useEffect } from "react";
import { initWeb3, rewardNFT } from "./utils/web";
import RewardStudent from "./RewardStudent.js";
import Check from "./Check.js";
import Ach from "./Ach.js";
import BurnAchievement from "./BurnAchievement.js";

function App() {

  useEffect(() => {
    const initializeWeb3 = async () => {
      await initWeb3();
    };
    initializeWeb3();
  }, []);

  return (
    <div className="App">
      <button
        onClick={() =>
          window.ethereum.request({ method: "eth_requestAccounts" })
        }
      >
        Connect Wallet
      </button>
      <RewardStudent />
      <Check />
      <Ach />
      <BurnAchievement/>
    </div>
  );
}

export default App;
