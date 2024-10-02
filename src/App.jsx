import React, { useState } from "react";
import ResumeEditor from "./pages/ResumeEditor";
import ResumePage from "./pages/ResumePage";
import ResumePage2 from "./pages/ResumePage2";
import ResumePage4 from "./pages/ResumePage4";

function App() {
  return (
    <>
      <div className="bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-md mt-8 mb-8 p-8">
          <ResumePage />
        </div>
      </div>

    </>
  );
}

export default App;
