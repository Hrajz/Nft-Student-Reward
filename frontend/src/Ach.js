import React, { useState } from "react";
import { getAchievementsByAddress } from "./utils/web.js";

const Achievements = () => {
  const [address, setAddress] = useState("");
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAchievements = async () => {
    setLoading(true);
    setError(null);
    try {
      // const [tokenIds, achievementsByStudent] = await getAchievementsByAddress(
      //   address
      // );

      const fetchedAchievements = await getAchievementsByAddress(address);
      setAchievements(fetchedAchievements);
      console.log(fetchedAchievements);
    } catch (err) {
      setError("Failed to fetch achievements");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div id="achievement">
      <h1>Student Achievements</h1>
      <input
      className="fill"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter student address"
      />
      <button 
     className="btn" onClick={fetchAchievements} disabled={loading}>
        {loading ? "Loading..." : "Get Achievements"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {achievements.length > 0 && (
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>
              <p>
                <strong>Token ID:</strong> {achievement.tokenId}
              </p>
              <p>Description: {achievement.description}</p>
              <p>
                Date: {achievement.date.slice(6, 8)}-
                {monthNames[parseInt(achievement.date.slice(4, 6), 10) - 1]}-
                {achievement.date.slice(0, 4)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Achievements;
