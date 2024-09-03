

export default function App() {
  return (
   
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-neutral_white rounded-xl w-full max-w-2xl p-8">
        
        <h2 className="text-neutral_graydark text-3xl font-sans font-bold mb-5">Contact Us</h2>

        <div className="flex space-x-4 mb-4">

          <div className="w-1/2">
          <label className="block text-neutral_graydark font-sans text-lg mb-2" for='firstname'>First Name
            <span className=" text-primary_greenmedium font-sans text-lg mx-4">*</span>
          </label>
          <input className="w-full px-3 py-2 border border-neutral_graymedium rounded-lg" type="text" id="firstname"/>
          </div>

          <div className="w-1/2">
          <label className="block text-neutral_graydark font-sans text-lg mb-2" for='lastname'>Last Name
            <span className=" text-primary_greenmedium font-sans text-lg mx-4">*</span>
          </label>
          <input className="w-full px-3 py-2 border border-neutral_graymedium rounded-lg" type="text" id="lastname"/>
          </div>



        </div>

      </form>

    </div>
  );
}
