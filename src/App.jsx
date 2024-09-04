
import './App.css';
export default function App() {
  return (
   
    <div className="main-div">
      
      <form className="form-contact">
        
        <h2 className="text-neutral_graydark text-3xl font-sans font-bold mb-5">Contact Us</h2>

        <div className="flex space-x-4 mb-4">

          <div className="w-1/2">
          <label className="block text-neutral_graydark font-sans text-base mb-2" for='firstname'>First Name
            <span className=" text-primary_greenmedium font-sans text-lg mx-1">*</span>
          </label>
          <input className="w-full px-3 py-2 border border-neutral_graymedium rounded-lg" type="text" id="firstname"/>
          </div>

          <div className="w-1/2">
          <label className="block text-neutral_graydark font-sans text-base mb-2" for='lastname'>Last Name
            <span className=" text-primary_greenmedium font-sans text-lg mx-1">*</span>
          </label>
          <input className="w-full px-3 py-2 border border-neutral_graymedium rounded-lg" type="text" id="lastname"/>
          </div>

        </div>

        <div className="mb-4">
          <label className="block text-neutral_graydark font-sans text-base mb-2" for='email'>Email Adress
            <span className=" text-primary_greenmedium font-sans text-lg mx-1">*</span>
          </label>
          <input className="w-full px-3 py-2 border border-neutral_graymedium rounded-lg" type="text" id="email"/>
          </div>

          <div className="flex space-x-4 mb-4">

          <div className="w-1/2 relative">
         
          <label className="block text-neutral_graydark font-sans text-base mb-2" for='querytype'>Query Type
            <span className=" text-primary_greenmedium font-sans text-lg mx-1">*</span>
          </label>
          <input className="w-full px-3 py-2 border border-neutral_graymedium rounded-lg "  id="querytype"/>
          <input type="radio" id='general' className="absolute bottom-4 left-6 "/>
          <label for='general' className="block text-neutral_graydark font-sans   font-normal text-base  absolute bottom-3 left-12">General Enquiry</label>
          </div>

          <div className="w-1/2 relative">
          
          <input className="w-full px-3 py-2 border border-neutral_graymedium rounded-lg mt-9" id="lastname"/>
          <input type="radio" id='general' className="absolute bottom-4 left-6 "/>
          <label for='general' className="block text-neutral_graydark font-sans   font-normal text-base  absolute bottom-3 left-12">Support Request</label>

          </div>

        </div>

        <div className="mb-4">
      <label className="block text-neutral_graydark font-sans text-base mb-2" for="message">Message
      <span className=" text-primary_greenmedium font-sans text-lg mx-1">*</span>
      </label>
      <textarea className="w-full px-3 py-2 border border-neutral_graymedium rounded-lg" id="message" ></textarea>
    </div>

        <div className="mb-8">

          <input type="checkbox" className=""/>
          <span className="ml-3  text-neutral_graydark font-sans text-base ">I consent to being contaced by the team</span>
          <span className=" text-primary_greenmedium font-sans text-lg mx-1 ">*</span>

        </div>

        <div className="mb-4">

          <button className="w-full bg-primary_greenmedium p-4 rounded-lg text-neutral_white font-sans font-medium">Submit</button>

        </div>



      </form>

    </div>
  );
}
