import React, { useState } from "react";
import { web3, rewardNFT } from "./utils/web.js";

const RewardStudent = () => {
  const [studentAddress, setStudentAddress] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleAward = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts)
    await rewardNFT.methods
      .awardNFT(studentAddress, description, date)
      .send({ from: accounts[0] });
    alert("NFT awarded to student!");
  };

  return (
    <div>
      <h2>Award Student Achievement NFT</h2>
      <input
        type="text"
        placeholder="Student Address"
        value={studentAddress}
        onChange={(e) => setStudentAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Achievement Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleAward}>Award NFT</button>
    </div>
  );
};

export default RewardStudent;
