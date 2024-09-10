import { useEffect, useState } from "react";
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
  const [isPasting, setIsPasting] = useState(false);
  const [showMessage,setShowMessage] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handlePaste = (e) => {
    e.preventDefault();
    setIsPasting(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    
  };

  useEffect(()=>{
    if(showMessage){
      const handleClick = () => {
        setShowMessage(false);
      };
      document.body.addEventListener('click', handleClick);

      return () => {
        document.body.removeEventListener('click', handleClick);
      };
    }



  },[showMessage])

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
                submitted && !firstName ? "err-input" : "inputext-form"
              }
              type="text"
              id="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onPaste={handlePaste}
              placeholder={isPasting ? "Type manually " : ""}
            />
            {submitted && !firstName && (
              <p className="err-text">This field is required</p>
            )}
          </div>

          <div className="box">
            <label className="label-form" htmlFor="lastname">
              Last Name
              <span className="star-form">*</span>
            </label>
            <input
              className={submitted && !lastName ? "err-input" : "inputext-form"}
              type="text"
              id="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onPaste={handlePaste}
              placeholder={isPasting ? "Type manually " : ""}
            />
            {submitted && !lastName && (
              <p className="err-text">This field is required</p>
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
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onPaste={handlePaste}
          />
          {submitted && !validateEmail(email) && (
            <p className="err-text">Please enter a valid email address</p>
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
              submitted && !message ? "err-textarea" : "textarea-form "
            }
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onPaste={handlePaste}
          ></textarea>
          {submitted && !message && (
            <p className="err-text">This field is required</p>
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

      { showMessage && <div className="overlay">
        <div className="overlay-box">
          <div className="message-container">
            <FaCheckCircle className="check-icon" />
            <p className="overlay-title">Message sent !</p>
          </div>

          <p className="overlay-text">
            Thanks for completing the form,we'll be in touch soon!
          </p>
        </div>
      </div>}

    </div>
  );
}
