import React from "react";

function TemplatePreview() {
  return (
    <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto bg-slate-100 px-4 py-2 rounded-xl">
      <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
        <img
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
          alt="University of Southern California"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          City of love
        </div>
      </article>
      
      {/* Add more articles here if needed */}
      <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
        <img
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
          alt="University of Southern California"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 className="z-10 mt-3 text-3xl font-bold text-white">New York</h3>
        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          The Big Apple
        </div>
      </article>
      
      {/* You can add more articles to fill up the grid */}
    </div>
  );
}

export default TemplatePreview;
