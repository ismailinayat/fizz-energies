import React from "react";

const contact_us = () => {
  return (
    <div className="contact">
      <div className="contact_heading">
        <h1>Contact</h1>
        <h4>ANY QUESTIONS, CONTACT US</h4>
      </div>
      <div className="address__info">
        <h3>Suit # 07, Hakeem Plaza, Range Road, Rawalpindi Cantt. Pakistan</h3>
        <h3>+92-322-2267197</h3>
        <h3>7 Days A Week From 9:00am To 8:00pm PST</h3>
        <h3>info@fizzenergies.com</h3>
      </div>
      <div className="in__touch">
        <h2>GET IN TOUCH</h2>
      </div>
      <div className="input__fields">
        <input placeholder="Enter your name" />
        <input type="number" placeholder="Enter your mobile number" />
        <textarea placeholder="Enter your message" />
      </div>
      <div className="btn">
        <button className="btn">Send Message</button>
      </div>
    </div>
  );
};

export default contact_us;
