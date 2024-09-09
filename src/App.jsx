import { useState } from "react";
import "./App.css";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [radio, setRadio] = useState("");
  const [errore, setErrore] = useState("");

  return (
    <div className="main-div">
      <form className="form-contact">
        <h2 className="title-form">Contact Us</h2>

        <div className="flex-box">
          <div className="box ">
            <label className="label-form" htmlFor="firstname">
              First Name
              <span className="star-form">*</span>
            </label>
            <input
              className="inputext-form"
              type="text"
              id="firstname"
              vlau={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="box">
            <label className="label-form" htmlFor="lastname">
              Last Name
              <span className="star-form">*</span>
            </label>
            <input
              className="inputext-form"
              type="text"
              id="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="label-form" htmlFor="email">
            Email Adress
            <span className="star-form">*</span>
          </label>
          <input className="inputext-form" type="text" id="email" />
        </div>

        <div className="mb-4">
          <label className="label-form " htmlFor="querytype">
            Query Type
            <span className="star-form">*</span>
          </label>

          <div className="flex-box ">
            <div className="radiodiv-form ">
              <input type="radio" className="cursor-pointer" />
              <label className="radiolabel-form">General Enquiry</label>
            </div>

            <div className="radiodiv-form">
              <input type="radio" className="cursor-pointer" />
              <label className="radiolabel-form">Support Request</label>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="label-form " htmlFor="message">
            Message
            <span className="star-form">*</span>
          </label>
          <textarea className="textarea-form" id="message"></textarea>
        </div>

        <div className="mb-4">
          <input type="checkbox" />
          <span className="spantext-form">
            I consent to being contaced by the team
          </span>
          <span className="star-form">*</span>
        </div>

        <div className="mb-4">
          <button className="submitbtn-form">Submit</button>
        </div>
      </form>
    </div>
  );
}
