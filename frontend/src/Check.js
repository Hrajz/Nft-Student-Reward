import React, { useState } from "react";
import { web3, rewardNFT } from "./utils/web.js";

function NFTChecker() {
  const [tokenId, setTokenId] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [ownership, setOwnership] = useState("");
  const [balance, setBalance] = useState("");

  const handleCheckOwnership = async () => {
    try {
      const owner = await rewardNFT.methods.ownerOf(tokenId).call();
      setOwnership(`Token ID ${tokenId} is owned by address: ${owner}`);
    } catch (error) {
      setOwnership("Error fetching ownership");
      console.error("Error fetching ownership:", error);
    }
  };

  const handleCheckStudentBalance = async () => {
    try {
      const balance = await rewardNFT.methods.balanceOf(studentAddress).call();
      setBalance(`Student at address ${studentAddress} has ${balance} NFTs.`);
    } catch (error) {
      setBalance("Error fetching balance");
      console.error("Error fetching balance:", error);
    }
  };

  return (
    <div id="check">
      <h1>NFT Checker</h1>
      <div>
        <input
          className="fill"
          type="text"
          value={tokenId}
          onChange={(e) => setTokenId(e.target.value)}
          placeholder="Enter Token ID"
        />
        <button className="btn" onClick={handleCheckOwnership}>
          Check Ownership
        </button>
        <p>{ownership}</p>
      </div>
      <div>
        <input
          className="fill"
          type="text"
          value={studentAddress}
          onChange={(e) => setStudentAddress(e.target.value)}
          placeholder="Enter Student Address"
        />
        <button className="btn" onClick={handleCheckStudentBalance}>
          Check Student Balance
        </button>
        <p>{balance}</p>
      </div>
    </div>
  );
}

export default NFTChecker;
