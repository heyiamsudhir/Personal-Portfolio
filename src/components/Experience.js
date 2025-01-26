import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        {/* Left Side: Internships */}
        <div className="experience-left">
          <h2>Internships</h2>
          <ul className="experience-list">
            <li>
              <h3>Text Summarization Intern</h3>
              <p>Infosys Springboard</p>
              <p>May 2024 - July 2024</p>
              <p>
                Developed an NLP model for abstractive text summarization using
                Python and Keras, improving text coherence by 15%.
              </p>
            </li>
          </ul>
        </div>

        {/* Right Side: Certifications */}
        <div className="experience-right">
          <h2>Certifications</h2>
          <ul className="certifications-list">
            <li>
              <h3>Google Data Analytics Certification</h3>
              <p>Coursera</p>
              <p>Completed: June 2024</p>
              <p>
                Gained expertise in data analysis tools like SQL, R, and Tableau
                to derive actionable insights from datasets.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};



export default Experience;
