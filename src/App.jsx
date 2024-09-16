import { useEffect, useState, useCallback } from "react";
import "./App.css";

import MyMessage from "./components/MyMessage";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  checkBox: false,
  radio: "",
}

export default function App() {
  const [formData,setFormData] = useState(initialFormState);
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

    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;
    const containsURL = urlRegex.test(message);

    return lengthValid && containsValidChars && !containsURL;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : (type === "text" || type === "textarea") ? value.trim() : value,
    });
  };

  const handlePaste = useCallback((e) => {
    e.preventDefault();
  }, []);

  const formIsValid = () => {
    const { firstName, lastName, email, message, radio, checkBox } = formData;
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
        setFormData(initialFormState);
      } else {
        setSubmitted(true);
      }
    },
    [formData]
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
                submitted && !validateName(formData.firstName)
                  ? "err-input"
                  : "inputext-form"
              }
              type="text"
              id="firstname"
              value={formData.firstName}
              onChange={(e) => setFirstName(e.target.value.trim())}
              onPaste={handlePaste}
            />
            {submitted && (!formData.firstName || !validateName(formData.firstName)) && (
              <p className="err-text">
                {formData.firstName ? "Invalid first name" : "This field is required"}
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
                submitted && !validateName(formData.lastName)
                  ? "err-input"
                  : "inputext-form"
              }
              type="text"
              id="lastname"
              value={formData.lastName}
              onChange={(e) => setLastName(e.target.value.trim())}
              onPaste={handlePaste}
            />
            {submitted && (!formData.lastName || !validateName(formData.lastName)) && (
              <p className="err-text">
                {formData.lastName ? "Invalid last name" : "This field is required"}
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
              submitted && !validateEmail(formData.email) ? "err-input" : "inputext-form"
            }
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setEmail(e.target.value)}
            onPaste={handlePaste}
          />
          {submitted && (!formData.email || !validateEmail(formData.email)) && (
            <p className="err-text">
              {formData.email ? "Invalid Email address" : "This field is required"}
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
                formData.radio === "General Enquiry" ? "active-query" : "radiodiv-form "
              }
              onClick={() => setRadio("General Enquiry")}
            >
              <input
                type="radio"
                className="cursor-pointer"
                value="General Enquiry"
                checked={formData.radio === "General Enquiry"}
                onChange={(e) => setRadio(e.target.value)}
              />
              <label className="radiolabel-form">General Enquiry</label>
            </div>

            <div
              className={
                formData.radio === "Support Request" ? "active-query" : "radiodiv-form "
              }
              onClick={() => setRadio("Support Request")}
            >
              <input
                type="radio"
                className="cursor-pointer"
                value="Support Request"
                checked={formData.radio === "Support Request"}
                onChange={(e) => setRadio(e.target.value)}
              />
              <label className="radiolabel-form">Support Request</label>
            </div>
          </div>
          {submitted && !formData.radio && (
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
              submitted && !validateMessage(formData.message)
                ? "err-textarea"
                : "textarea-form "
            }
            id="message"
            value={formData.message}
            onChange={(e) => setMessage(e.target.value.trimStart())}
            onPaste={handlePaste}
          ></textarea>
          {submitted && (!formData.message || !validateMessage(formData.message)) && (
            <p className="err-text">
              {formData.message ? "Invalid Message " : "This field is required"}
            </p>
          )}
        </div>

        <div className="mb-4" onClick={() => setCheckBox(prev => !prev)}>
          <input
            type="checkbox"
            checked={formData.checkBox}
            onChange={(e) => setCheckBox(e.target.checked)}
          />
          <span className="spantext-form">
            I consent to being contaced by the team
          </span>
          <span className="star-form">*</span>
          {submitted && !formData.checkBox && (
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
       <MyMessage/>
      )}
    </div>
  );
}
