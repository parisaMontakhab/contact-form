
import './App.css';
export default function App() {
  return (
   
    <div className="main-div">
      
      <form className="form-contact">
        
        <h2 className="title-form">Contact Us</h2>

        <div className="flex space-x-4 mb-4">

          <div className="w-1/2">
          <label className="label-form" for='firstname'>First Name
            <span className="star-form">*</span>
          </label>
          <input className="inputext-form" type="text" id="firstname"/>
          </div>

          <div className="w-1/2">
          <label className="label-form" for='lastname'>Last Name
            <span className="star-form">*</span>
          </label>
          <input className="inputext-form" type="text" id="lastname"/>
          </div>

        </div>

        <div className="mb-4">
          <label className="label-form" for='email'>Email Adress
            <span className="star-form">*</span>
          </label>
          <input className="inputext-form" type="text" id="email"/>
          </div>

          <div className="flex space-x-4 mb-4">

          <div className="w-1/2 relative">
         
          <label className="label-form" for='querytype'>Query Type
            <span className="star-form">*</span>
          </label>
          <input className="inputext-form"  id="querytype"/>
          <input type="radio" id='general' className="inputradio-form "/>
          <label for='general' className="labelradio-form">General Enquiry</label>
          </div>

          <div className="w-1/2 relative">
          
          <input className="inputext-form mt-9" id="supportquery"/>
          <input type="radio" id='general' className="inputradio-form"/>
          <label for='general' className="labelradio-form">Support Request</label>

          </div>

        </div>

        <div className="mb-4">
      <label className="label-form" for="message">Message
      <span className="star-form">*</span>
      </label>
      <textarea className="w-full px-3 py-2 border border-neutral_graymedium rounded-lg" id="message" ></textarea>
    </div>

        <div className="mb-8">

          <input type="checkbox" className=""/>
          <span className="ml-3  text-neutral_graydark font-sans text-base ">I consent to being contaced by the team</span>
          <span className="star-form">*</span>

        </div>

        <div className="mb-4">

          <button className="w-full bg-primary_greenmedium p-4 rounded-lg text-neutral_white font-sans font-medium">Submit</button>

        </div>



      </form>

    </div>
  );
}
