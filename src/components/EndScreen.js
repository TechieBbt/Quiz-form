import React, {useRef, useState } from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";
import emailjs from '@emailjs/browser';
// import {Link } from "react-router-dom";


const Result = () => {
  return (
      <p>Your message has been successfully sent. We will contact you soon.</p>
  )
}

const EndScreen = () => {
  const [result, showResult] = useState (false, true)
  const Form = useRef ()
  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm("service_514qzbl", "template_rtuuuka", Form.current, "DNi8nkaTRcb0VICiE")
      .then(
          (result) => {
              console.log(result.text);
              console.log("Your message has been successfully sent. We will contact you soon.")
          },
          (error) => {
              console.log(error.text);
          }
      );
      Form.current.reset();
      showResult(true);
      };
      setTimeout(() => {
          showResult(false);
      },5000 );

  const { score } = useContext(GameStateContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted] = useState(false); // Track whether the form has been submitted


  return (
    <div className="EndScreen">
      {submitted ? (
        <div className="feedback-message">
          <p>Thanks for submitting! <br></br>Check your email for eligibility.</p>
        </div>
      ) : (
        <>
          <h1>Quiz Finished</h1>
          <h2 name="User_score"
              id="score">
            {score} / {Questions.length}
          </h2>           
          <div>
            <form action="" ref={Form} onSubmit={sendEmail} className="form-container">
            <label htmlFor="name">Enter Your Full Name:</label>
            <input
              type="text"
              name="User_name"
              id="name"
              placeholder="Ex. John Williams"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              required // Add the required attribute
            />
            <label htmlFor="email">Enter Your Email:</label>
            <input
              type="email"
              name="User_email"
              id="email"
              placeholder="Ex. john@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required // Add the required attribute
            />
            <label htmlFor="email">Score:</label>
            <input
              type="text"
              name="User_score"
              id="score"
              placeholder="Enter your score as seen above, ex. 5/5"
              required // Add the required attribute
            />
            {/* <Link to="/thankyou"> */}
              <button type="submit">Submit</button>
              <div className="row"> {result ? <Result/> : null} </div>               
            {/* </Link> */}
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default EndScreen;