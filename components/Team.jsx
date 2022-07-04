import React from "react";

function Team() {
  return (
    <div className="section__team">
      <div className="heading">
        <h2>Our Team</h2>
      </div>

      <div className="members">
        <div className="member">
          <div className="member__img">
            <img src="./team/Bilal_Alvi.jpg" alt="" />
          </div>

          <div className="member__name">
            <h3>Mohammad Bilal Alvi</h3>
          </div>

          <div className="member__designation">
            <p>
              Charmain Alvi Services <span>Import/Export Head</span>
            </p>
          </div>
        </div>

        <div className="member">
          <div className="member__img">
            <img src="./team/Faizan.jpg" alt="" />
          </div>

          <div className="member__name">
            <h3>Faizan Ahmed</h3>
          </div>

          <div className="member__designation">
            <p>Managing Director</p>
          </div>
        </div>

        <div className="member">
          <div className="member__img">
            <img src="./team/A.Rehman.jpg" alt="" />
          </div>

          <div className="member__name">
            <h3>Abdul Rehman</h3>
          </div>

          <div className="member__designation">
            <p>Technical Officer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;