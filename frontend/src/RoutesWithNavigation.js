import React, { useState, useEffect } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import RewardStudent from "./RewardStudent.js";
import Check from "./Check.js";
import Ach from "./Ach.js";
import BurnAchievement from "./BurnAchievement.js";
import meta from "./ad75b7b113ac422080d6ce73d379de6e.png"

const RoutesWithNavigation = () => {
  const [hasButtonBeenClicked, setHasButtonBeenClicked] = useState(() => {
    // Retrieve state from sessionStorage
    return sessionStorage.getItem("hasButtonBeenClicked") === "true";
  });
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      // Reset button state when navigating to the home route
      setHasButtonBeenClicked(false);
      sessionStorage.removeItem("hasButtonBeenClicked");
    }
  }, [location]);

  const handleButtonClick = () => {
    setHasButtonBeenClicked(true);
    sessionStorage.setItem("hasButtonBeenClicked", "true");
  };

  return (
    <>
      {!hasButtonBeenClicked && (
        <nav className="navigate">
          <img className="metamask" src={meta} alt="meta" />
          <Link to="/reward-student">
            <button className="btn bt2" onClick={handleButtonClick}>
              Reward Student
            </button>
          </Link>
          <Link to="/check">
            <button className="btn bt2" onClick={handleButtonClick}>
              Check Achievement
            </button>
          </Link>
          <Link to="/ach">
            <button className="btn bt2" onClick={handleButtonClick}>
              View Achievements
            </button>
          </Link>
          <Link to="/burn-achievement">
            <button className="btn bt2" onClick={handleButtonClick}>
              Burn Achievement
            </button>
          </Link>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<div />} />{" "}
        {/* Empty component for home route */}
        <Route path="/reward-student" element={<RewardStudent />} />
        <Route path="/check" element={<Check />} />
        <Route path="/ach" element={<Ach />} />
        <Route path="/burn-achievement" element={<BurnAchievement />} />
      </Routes>
    </>
  );
};

export default RoutesWithNavigation;
