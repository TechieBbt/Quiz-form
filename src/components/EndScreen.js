import React, { useState } from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";

const EndScreen = () => {
  const { score } = useContext(GameStateContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false); // Track whether the form has been submitted

  const submitForm = () => {
    if (name.trim() === "" || email.trim() === "") {
      // Check if name or email is empty before submission
      alert("Please fill in both name and email before submitting.");
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="EndScreen">
      {submitted ? (
        <div className="feedback-message">
          <p>Thanks for submitting! <br></br>Check your email for eligibility.</p>
        </div>
      ) : (
        <>
          <h1>Quiz Finished</h1>
          <h2>
            {score} / {Questions.length}
          </h2>
          <div className="form-container">
            <label htmlFor="name">Enter Your Full Name:</label>
            <input
              type="text"
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
              id="email"
              placeholder="Ex. john@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required // Add the required attribute
            />
            <button onClick={submitForm}>Submit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default EndScreen;
