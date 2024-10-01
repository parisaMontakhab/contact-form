import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

export default function MyMessage (){
    return(
        <div className="overlay">
        <div className="overlay-box">
          <div className="message-container">
            <FaCheckCircle className="check-icon" data-testid='testId'/>
            <p className="overlay-title" data-testid='message sent'>Message sent !</p>
          </div>

          <p className="overlay-text">
            Thanks for completing the form,we'll be in touch soon!
          </p>
        </div>
      </div>
    )
}