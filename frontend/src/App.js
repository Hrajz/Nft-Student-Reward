import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { initWeb3 } from "./utils/web";
import RoutesWithNavigation from "./RoutesWithNavigation"; // Import the updated component
import Header from "./Header";
import Particle from "./Particle";

function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(true);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setIsMetaMaskInstalled(true);
      const initializeWeb3 = async () => {
        await initWeb3();
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setIsWalletConnected(true);
        }

        // Listen for account changes to detect disconnection
        window.ethereum.on("accountsChanged", (accounts) => {
          if (accounts.length === 0) {
            setIsWalletConnected(false);
          } else {
            setIsWalletConnected(true);
          }
        });
      };
      initializeWeb3();
    } else {
      setIsMetaMaskInstalled(false);
    }
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts.length > 0) {
        setIsWalletConnected(true);
      }
    }
  };

  return (
    <Router>
      <Header />
      <Particle />
      <div className="App">
        {!isMetaMaskInstalled ? (
          <div id="main">
            <div className="description">
              A decentralized application (D-App) that allows Everyone to
              receive and manage NFT-based rewards for their professional and
              academic achievements using blockchain technology
            </div>
            <div className="meta">
              <a
                href="https://metamask.io/download.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn download">Install MetaMask to use D-app</button>
              </a>
            </div>
          </div>
        ) : (
          <>
            {!isWalletConnected && (
              <div id="main">
                <div className="description">
                  A decentralized application (D-App) that allows Everyone to
                  receive and manage NFT-based rewards for their professional
                  and academic achievements using blockchain technology
                </div>
                <div className="meta">
                  <button id="connect" onClick={connectWallet}>
                    Connect Wallet
                  </button>
                </div>
              </div>
            )}

            {isWalletConnected && <RoutesWithNavigation />}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
