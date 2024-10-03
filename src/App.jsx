import React, { useState } from "react";
import ResumePage from "./pages/ResumePage";
function App() {
  return (
    <>
      {/* <div className="bg-gray-600 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-md mt-8 mb-8 p-8">
          <ResumePage />
        </div>
      </div> */}

      <div className="bg-gray-600 flex justify-center items-center min-h-screen p-4">
        {/* <div className="bg-white rounded-lg shadow-md w-full max-w-4xl mt-8 mb-8 p-8"> */}
        <div className="bg-white shadow-md w-full max-w-6xl mt-8 mb-8 p-4">
          <ResumePage />
        </div>
      </div>

    </>
  );
}

export default App;
