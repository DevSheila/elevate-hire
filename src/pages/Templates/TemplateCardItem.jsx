import React, { useEffect, useState } from "react";

function TemplateCardItem({ resume }) {
  const pastelColors = [
    "bg-violet-100",
    "bg-blue-100",
    "bg-sky-100",
    "bg-cyan-100",
    "bg-fuchsia-100",
    "bg-rose-100",
    "bg-emerald-100",
    "bg-pink-100",
    "bg-amber-100",
    "bg-orange-100",
    "bg-purple-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-indigo-100",
    "bg-red-100",
  ];

  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
    setBgColor(randomColor);
  }, []);

  return (
    <>
      <article className="rounded-xl    ">
        <div
          className={`relative flex items-end overflow-hidden rounded-xl p-10 ${bgColor} hover:shadow-lg`}
        >
          <div className=" bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200 rounded-xl border-t-4 ">
            <img src={resume?.source || "/doc.png"} alt="resume template" />

            {resume?.type == "premium" ? (
              <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-cyan-500 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            ) : (
              <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-gray-500 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between">
          <div className="mt-1 p-2">
            <h2 className="text-gray-700 line-clamp-1">{resume?.name}</h2>
            <p className="text-gray-400 mt-1 text-sm">{resume?.type}</p>
          </div>
        </div>
      </article>
    </>
  );
}

export default TemplateCardItem;
