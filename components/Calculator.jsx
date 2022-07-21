import React, { useState } from "react";
import Link from "next/link";
//import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

const Calculator = () => {
  const [bulbs, setBulbs] = useState(0);
  const [fans, setFans] = useState(0);
  const [tv, setTv] = useState(0);
  const [fridge, setFridge] = useState(0);
  const [ac, setAc] = useState(0);
  const [washing, setWasshing] = useState(0);
  const [iron, setIron] = useState(0);
  const [totalKV, setTotalKV] = useState(null);

  const handleLightsChange = (e) => {
    console.log(e.target.value);
    setBulbs(e.target.value);
  };

  const handleFanChange = (e) => {
    console.log(e.target.value);
    setFans(e.target.value);
  };

  const handleTVChange = (e) => {
    console.log(e.target.value);
    setTv(e.target.value);
  };

  const handleFridgeChange = (e) => {
    console.log(e.target.value);
    setFridge(e.target.value);
  };

  const handleACChange = (e) => {
    console.log(e.target.value);
    setAc(e.target.value);
  };

  const handleWashingChange = (e) => {
    console.log(e.target.value);
    setWasshing(e.target.value);
  };

  const handleIronChange = (e) => {
    console.log(e.target.value);
    setIron(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let totalBulbsPower = parseInt(bulbs) * 20;
    let totalFansPower = parseInt(fans) * 80;
    let totalTvPower = parseInt(tv) * 150;
    let totalFridgePower = parseInt(fridge) * 500;
    let totalAcPower = parseInt(ac) * 1500;
    let totalWashingPower = parseInt(washing) * 500;
    let totalIronPower = parseInt(iron) * 1500;

    setTotalKV(
      totalBulbsPower +
        totalFansPower +
        totalTvPower +
        totalFridgePower +
        totalAcPower +
        totalWashingPower +
        totalIronPower
    );
  };

  return (
    <div className="calculator__section">
      <div className="calculator__container">
        <div className="calculator__section__heading">
          <h2>Want A More Customized Solution?</h2>
        </div>

        <div className="calculator__heading">
          <h3>
            Select The Type And Number of Appliances From The following
            calculator that you want to run simultaneously on solar.
          </h3>
        </div>

        <div className="appliances__container">
          <form className="calculator__form" onSubmit={handleFormSubmit}>
            <div className="appliance lights">
              <div className="title">
                <h5>
                  LED Bulbs{" "}
                  <span>
                    (14W<span>/bulb</span>)
                  </span>
                </h5>
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="lights 0"
                    value="0"
                    name="bulb"
                    onChange={handleLightsChange}
                  />
                  <label htmlFor="lights 0" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>0</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="lights 1"
                    value="1"
                    name="bulb"
                    onChange={handleLightsChange}
                  />
                  <label htmlFor="lights 1" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>1</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="lights 3"
                    value="3"
                    name="bulb"
                    onChange={handleLightsChange}
                  />
                  <label htmlFor="lights 3" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>3</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="lights 5"
                    value="5"
                    name="bulb"
                    onChange={handleLightsChange}
                  />
                  <label htmlFor="lights 5" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>5</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="lights 10"
                    value="10"
                    name="bulb"
                    onChange={handleLightsChange}
                  />
                  <label htmlFor="lights 10" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>10</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="lights 15"
                    value="15"
                    name="bulb"
                    onChange={handleLightsChange}
                  />
                  <label htmlFor="lights 15" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>15</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="lights 20"
                    value="20"
                    name="bulb"
                    onChange={handleLightsChange}
                  />
                  <label htmlFor="lights 20" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>20</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="appliance fans">
              <div className="title">
                <h5>
                  Ceiling Fans{" "}
                  <span>
                    (150W<span>/fan</span>)
                  </span>
                </h5>
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="fan 0"
                    value="0"
                    name="fan"
                    onChange={handleFanChange}
                  />
                  <label htmlFor="fan 0" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>0</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="fan 1"
                    value="1"
                    name="fan"
                    onChange={handleFanChange}
                  />
                  <label htmlFor="fan 1" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>1</p>
                    </span>
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="fan 2"
                    value="2"
                    name="fan"
                    onChange={handleFanChange}
                  />
                  <label htmlFor="fan 2" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>2</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="fan 3"
                    value="3"
                    name="fan"
                    onChange={handleFanChange}
                  />
                  <label htmlFor="fan 3" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>3</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="fan 5"
                    value="5"
                    name="fan"
                    onChange={handleFanChange}
                  />
                  <label htmlFor="fan 5" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>5</p>
                    </span>
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="fan 8"
                    value="8"
                    name="fan"
                    onChange={handleFanChange}
                  />
                  <label htmlFor="fan 8" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>8</p>
                    </span>
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="fan 10"
                    value="10"
                    name="fan"
                    onChange={handleFanChange}
                  />
                  <label htmlFor="fan 10" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>10</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="appliance tv">
              <div className="title">
                <h5>
                  LED TV{" "}
                  <span>
                    (150W<span>/tv</span>)
                  </span>
                </h5>
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="tv 0"
                    value="0"
                    name="tv"
                    onChange={handleTVChange}
                  />
                  <label htmlFor="tv 0" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>0</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="tv 1"
                    value="1"
                    name="tv"
                    onChange={handleTVChange}
                  />
                  <label htmlFor="tv 1" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>1</p>
                    </span>
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="tv 2"
                    value="2"
                    name="tv"
                    onChange={handleTVChange}
                  />
                  <label htmlFor="tv 2" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>2</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="appliance fridge">
              <div className="title">
                <h5>
                  Refrigerators{" "}
                  <span>
                    (500W<span>/inverter refrigerator</span>)
                  </span>
                </h5>
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="frige 0"
                    value="0"
                    name="fridge"
                    onChange={handleFridgeChange}
                  />
                  <label htmlFor="frige 0" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>0</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="frige 1"
                    value="1"
                    name="fridge"
                    onChange={handleFridgeChange}
                  />
                  <label htmlFor="frige 1" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>1</p>
                    </span>
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="fridge 2"
                    value="2"
                    name="fridge"
                    onChange={handleFridgeChange}
                  />
                  <label htmlFor="fridge 2" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>2</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="appliance ac">
              <div className="title">
                <h5>
                  1.5 Ton Air Conditioners{" "}
                  <span>
                    (1500W<span>/DC inverter</span>)
                  </span>
                </h5>
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="ac 0"
                    value="0"
                    name="ac"
                    onChange={handleACChange}
                  />
                  <label htmlFor="ac 0" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>0</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="ac 1"
                    value="1"
                    name="ac"
                    onChange={handleACChange}
                  />
                  <label htmlFor="ac 1" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>1</p>
                    </span>
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="ac 2"
                    value="2"
                    name="ac"
                    onChange={handleACChange}
                  />
                  <label htmlFor="ac 2" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>2</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="appliance washing">
              <div className="title">
                <h5>
                  Washing Machines{" "}
                  <span>
                    (500W<span>/automatic machine</span>)
                  </span>
                </h5>
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="washing 0"
                    value="0"
                    name="washing"
                    onChange={handleWashingChange}
                  />
                  <label htmlFor="washing 0" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>0</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="washing 1"
                    value="1"
                    name="washing"
                    onChange={handleWashingChange}
                  />
                  <label htmlFor="washing 1" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>1</p>
                    </span>
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="washing 2"
                    value="2"
                    name="washing"
                    onChange={handleWashingChange}
                  />
                  <label htmlFor="washing 2" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>2</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="appliance iron">
              <div className="title">
                <h5>
                  Iron{" "}
                  <span>
                    (1500W<span>/iron</span>)
                  </span>
                </h5>
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="iron 0"
                    value="0"
                    name="iron"
                    onChange={handleIronChange}
                  />
                  <label htmlFor="iron 0" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>0</p>
                    </span>
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="iron 1"
                    value="1"
                    name="iron"
                    onChange={handleIronChange}
                  />
                  <label htmlFor="iron 1" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>1</p>
                    </span>
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="iron 2"
                    value="2"
                    name="iron"
                    onChange={handleIronChange}
                  />
                  <label htmlFor="iron 2" className="form__radio-label">
                    <span className="form__radio-button">
                      <p>2</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="form__button">
              <button className="btn btn__green"> Submit</button>
            </div>
          </form>

          <div className="totalPowerRequired">
            <h3>
              {totalKV ? (
                <p>
                  You Require To Generate <span>{totalKV}</span> watts of
                  energy. For this amount of energy you will need a 5KV unit.
                </p>
              ) : null}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
