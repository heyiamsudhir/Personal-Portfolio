import React, { useState } from "react";
import "./Future.css";

const FutureGoals = () => {
  const [showGoals, setShowGoals] = useState(false);

  const toggleGoals = () => {
    setShowGoals(!showGoals);
  };

  return (
    <section className={`future ${showGoals ? "expanded" : ""}`}>
      <h2 onClick={toggleGoals} className="future-heading">
        Future Goals
        <span className={`arrow ${showGoals ? "rotate" : ""}`}>&#9662;</span>
      </h2>
      {showGoals && (
        <ul className="future-list">
          <li>
            <h3>Expand Software Development Skills</h3>
            <p>Focus on contributing to real-world projects in full-stack development.</p>
          </li>
          <li>
            <h3>Data Science Expertise</h3>
            <p>Enhance proficiency in machine learning, deep learning, and data visualization tools.</p>
          </li>
          <li>
            <h3>Open Source Contributions</h3>
            <p>Actively contribute to open-source projects to gain practical experience.</p>
          </li>
        </ul>
      )}
    </section>
  );
};

export default FutureGoals;
