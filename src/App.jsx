import "./App.css";
export default function App() {
  return (
    <div className="main-div">
      <form className="form-contact">
        <h2 className="title-form">Contact Us</h2>

        <div className="flex gap-3 mb-4 ">
          <div className="w-1/2 ">
            <label className="label-form" for="firstname">
              First Name
              <span className="star-form">*</span>
            </label>
            <input className="inputext-form" type="text" id="firstname" />
          </div>

          <div className="w-1/2">
            <label className="label-form" for="lastname">
              Last Name
              <span className="star-form">*</span>
            </label>
            <input className="inputext-form" type="text" id="lastname" />
          </div>
        </div>

        <div className="mb-4">
          <label className="label-form" for="email">
            Email Adress
            <span className="star-form">*</span>
          </label>
          <input className="inputext-form" type="text" id="email" />
        </div>

        <div className="mb-4">
          <label className="label-form " for="querytype">
            Query Type
            <span className="star-form">*</span>
          </label>

          <div className="flex gap-3 mb-4 ">

            <div className="radiodiv-form ">
            <input type="radio" className="cursor-pointer"/>
            <label className="radiolabel-form">General Enquiry</label>

            </div>

            <div className="radiodiv-form">
            <input type="radio" className="cursor-pointer"/>
            <label className="radiolabel-form">Support Request</label>

            </div>

          </div>

          
        </div>

        <div className="mb-4">
          <label className="label-form " for="message">
            Message
            <span className="star-form">*</span>
          </label>
          <textarea className="textarea-form" id="message"></textarea>
        </div>

        <div className="mb-8">
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
