import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contact_us = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    e.target[3].innerText = 'Sending ...'
    e.target[3].style.backgroundColor = 'grey'

    emailjs.sendForm(
        "service_qdm60xk",
        "template_gz53em4",
        e.target,
        "user_KGITFgaKwgk0uI96i7oZm"
      )
      .then(
        (result) => {
          e.target[3].innerText = 'Send Email';
          e.target[3].style.backgroundColor = '#EA3A60'
          toast.success("Email Sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id='contact'>
      <ToastContainer></ToastContainer>
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

      <div className="form__container">
        <form className='form' onSubmit={sendEmail}>

          <div className="form_input-container">
            <input className='form_input' placeholder="Enter your name" />
          </div>

          <div className="form_input-container">
            <input className='form_input' type="number" placeholder="Enter your mobile number" />
          </div>

          <div className="form_input-container">
            <textarea className='form_input' placeholder="Enter your message" />
          </div>

          <div className="btn">
            <button className="btn">Send Message</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default contact_us;
