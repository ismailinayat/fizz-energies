import React from "react";

const Benefits = () => {
  return (
    <div className="benefits_section">
      <div className="benefits_section-heading">
        <h1>BENEFITS OF SOLAR ENERGY</h1>
      </div>
      <div className="benefits_section-benefits">
        <div className="benefit">
          <img className="benefit-img" src="green energy icon.png " alt="" />
          <h3>ECONOMICAL ELECTRICITY</h3>
          <p>
            Installing solar power systems can have numerous benefits including
            lower electricity bills, lower carbon footprints, and potentially
            higher home values.
          </p>
        </div>

        <div className="benefit">
          <img className="benefit-img" src="solar-panel.png " alt="" />
          <h3>ZERO LOADSHEDDING</h3>
          <p>
            With installation of solar system you can get rid of loadshedding.
            As in courrent situattion in Pakistan.
          </p>
        </div>

        <div className="benefit">
          <img className="benefit-img" src="save the planet.png" alt="" />
          <h3>SAVE THE PLANET</h3>
          <p>
            Solar system use sun light to generate electricity by this we can
            save natural resources like oil and gas by which we produce
            electricity.
          </p>
        </div>
        <div className="benefit">
          <img className="benefit-img" src="natural energy.webp" alt="" />
          <h3>NATURAL RESOURCES</h3>
          <p>
            Solar system use sun light to generate electricity by this we can
            save natural resources like oil and gas by which we produce
            electricity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
