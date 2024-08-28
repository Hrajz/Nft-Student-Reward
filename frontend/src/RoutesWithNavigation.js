import React, { useState, useEffect } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import RewardStudent from "./RewardStudent.js";
import Check from "./Check.js";
import Ach from "./Ach.js";
import BurnAchievement from "./BurnAchievement.js";

const RoutesWithNavigation = () => {
  const [hasButtonBeenClicked, setHasButtonBeenClicked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setHasButtonBeenClicked(false);
    }
  }, [location]);

  const handleButtonClick = () => {
    setHasButtonBeenClicked(true);
  };

  return (
    <>
      {!hasButtonBeenClicked && (
        <nav className="navigate">
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
