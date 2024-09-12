import { useEffect, useState, useCallback } from "react";
import "./App.css";
import { FaCheckCircle } from "react-icons/fa";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [radio, setRadio] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]{2,50}$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailRegex.test(email);
  };

  const validateMessage = (message) => {
    const lengthValid = message.length >= 10 && message.length <= 500;

    const validCharsRegex = /^[a-zA-Z0-9\u0600-\u06FF\s.,?!'"]+$/;
    const containsValidChars = validCharsRegex.test(message);

    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const containsURL = urlRegex.test(message);

    return lengthValid && containsValidChars && !containsURL;
  };

  const handlePaste = useCallback((e) => {
    e.preventDefault();
  }, []);

  const formIsValid = () => {
    return (
      validateName(firstName) &&
      validateName(lastName) &&
      validateEmail(email) &&
      radio &&
      validateMessage(message) &&
      checkBox
    );
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (formIsValid()) {
        setShowMessage(true);
        setSubmitted(false);
        // Clear the form
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setCheckBox(false);
        setRadio("");
      } else {
        setSubmitted(true);
      }
    },
    [firstName, lastName, email, radio, message, checkBox]
  );

  useEffect(() => {
    if (showMessage) {
      const handleClick = () => {
        setShowMessage(false);
      };
      document.body.addEventListener("click", handleClick);

      return () => {
        document.body.removeEventListener("click", handleClick);
      };
    }
  }, [showMessage]);

  return (
    <div className="main-div">
      <form className="form-contact" onSubmit={handleSubmit}>
        <h2 className="title-form">Contact Us</h2>

        <div className="flex-box">
          <div className="box ">
            <label className="label-form" htmlFor="firstname">
              First Name
              <span className="star-form">*</span>
            </label>
            <input
              className={
                submitted && !validateName(firstName)
                  ? "err-input"
                  : "inputext-form"
              }
              type="text"
              id="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value.trim())}
              onPaste={handlePaste}
            />
            {submitted && (!firstName || !validateName(firstName)) && (
              <p className="err-text">
                {firstName ? "Invalid first name" : "This field is required"}
              </p>
            )}
          </div>

          <div className="box">
            <label className="label-form" htmlFor="lastname">
              Last Name
              <span className="star-form">*</span>
            </label>
            <input
              className={
                submitted && !validateName(lastName)
                  ? "err-input"
                  : "inputext-form"
              }
              type="text"
              id="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value.trim())}
              onPaste={handlePaste}
            />
            {submitted && (!lastName || !validateName(lastName)) && (
              <p className="err-text">
                {lastName ? "Invalid last name" : "This field is required"}
              </p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="label-form" htmlFor="email">
            Email Adress
            <span className="star-form">*</span>
          </label>
          <input
            className={
              submitted && !validateEmail(email) ? "err-input" : "inputext-form"
            }
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onPaste={handlePaste}
          />
          {submitted && (!email || !validateEmail(email)) && (
            <p className="err-text">
              {email ? "Invalid Email address" : "This field is required"}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="label-form " htmlFor="querytype">
            Query Type
            <span className="star-form">*</span>
          </label>

          <div className="flex-box ">
            <div
              className={
                radio === "General Enquiry" ? "active-query" : "radiodiv-form "
              }
              onClick={() => setRadio("General Enquiry")}
            >
              <input
                type="radio"
                className="cursor-pointer"
                value="General Enquiry"
                checked={radio === "General Enquiry"}
                onChange={(e) => setRadio(e.target.value)}
              />
              <label className="radiolabel-form">General Enquiry</label>
            </div>

            <div
              className={
                radio === "Support Request" ? "active-query" : "radiodiv-form "
              }
              onClick={() => setRadio("Support Request")}
            >
              <input
                type="radio"
                className="cursor-pointer"
                value="Support Request"
                checked={radio === "Support Request"}
                onChange={(e) => setRadio(e.target.value)}
              />
              <label className="radiolabel-form">Support Request</label>
            </div>
          </div>
          {submitted && !radio && (
            <p className="err-text">Please select a query type</p>
          )}
        </div>

        <div className="mb-4">
          <label className="label-form " htmlFor="message">
            Message
            <span className="star-form">*</span>
          </label>
          <textarea
            className={
              submitted && !validateMessage(message)
                ? "err-textarea"
                : "textarea-form "
            }
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value.trimStart())}
            onPaste={handlePaste}
          ></textarea>
          {submitted && (!message || !validateMessage(message)) && (
            <p className="err-text">
              {message ? "Invalid Message " : "This field is required"}
            </p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="checkbox"
            checked={checkBox}
            onChange={(e) => setCheckBox(e.target.checked)}
          />
          <span className="spantext-form">
            I consent to being contaced by the team
          </span>
          <span className="star-form">*</span>
          {submitted && !checkBox && (
            <p className="err-text">
              To submit this form, please consent to being contacted
            </p>
          )}
        </div>

        <div className="mb-4">
          <button className="submitbtn-form">Submit</button>
        </div>
      </form>

      {showMessage && (
        <div className="overlay">
          <div className="overlay-box">
            <div className="message-container">
              <FaCheckCircle className="check-icon" />
              <p className="overlay-title">Message sent !</p>
            </div>

            <p className="overlay-text">
              Thanks for completing the form,we'll be in touch soon!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
