// import { useState } from 'react'
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-24">
        {/* Conatiner */}
        <div className="container my-5 p-5  bg-violet-100 ">
          {/* Input */}
          <div className="getInput ">
            <h2 className="text-lg font-bold">Add a Todo</h2>
            <input className="w-1/2" type="text" />
            <button className="bg-violet-800 text-sm font-bold rounded-md text-white px-2 py-1 hover:bg-violet-950 mx-6 " >Add</button>
          </div>



        </div>
      </div>
    </>
  );
}

export default App;
