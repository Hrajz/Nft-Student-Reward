import React, { useState } from "react";
import { web3, rewardNFT } from "./utils/web.js";

const RewardStudent = () => {
  const [studentAddress, setStudentAddress] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleAward = async () => {
    // Reset error message
    setError("");

    // Validate inputs
    if (!web3.utils.isAddress(studentAddress)) {
      setError("Invalid student address.");
      return;
    }

    if (!description.trim()) {
      setError("Achievement description cannot be empty.");
      return;
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      setError("Invalid date format. Use YYYY-MM-DD.");
      return;
    }

    try {
      const accounts = await web3.eth.getAccounts();
      await rewardNFT.methods
        .awardNFT(studentAddress, description, date)
        .send({ from: accounts[0] });
      alert("NFT awarded to student!");
    } catch (err) {
      setError("An error occurred while awarding the NFT. Please try again.");
    }
  };

  return (
    <div id="award">
      <h2>Award Student Achievement NFT</h2>
      <div id="align">
        <input
          className="fill"
          type="text"
          placeholder="Student Address"
          value={studentAddress}
          onChange={(e) => setStudentAddress(e.target.value)}
        />
        <textarea
          className="fill"
          type="text"
          placeholder="Achievement Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="fill"
          type="text"
          placeholder="Date (YYYY-MM-DD)"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      {error && <p className="error">{error}</p>}
      <button id="green" onClick={handleAward}>
        Award NFT
      </button>
    </div>
  );
};

export default RewardStudent;
