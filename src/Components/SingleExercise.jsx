import React, { useState } from "react";

function SingleExercise({ id, date, duration, description, title }) {
  var obj = new Date();
  // {obj.toISOString(date).substring(0, 10)}

  const [open, setOpen] = useState(false);

  const carouselHandler = () => setOpen(!open);
  const deleteHandler = () => {
    console.log(`Deleted Exercise`)
  }

  return (
    <div className="p-3 mt-2 bg-gradient-to-tr from-green-300 to-blue-300 rounded-md">
      <div className="flex justify-between" onClick={carouselHandler}>
        <p className="font-semibold text-base">{title}</p>
        <div className="space-x-5 text-sm">
          <button className="bg-slate-500 py-1 px-4 hover:bg-slate-700 text-white rounded-lg shadow-sm">
            Edit
          </button>
          <button onClick={deleteHandler} className="bg-red-500 py-1 px-2 hover:bg-red-700 text-white rounded-lg shadow-sm">
            Delete
          </button>
          <button
            className="bg-blue-500 py-1 px-2 hover:bg-blue-700 text-white rounded-lg shadow-sm"
          >
            Description
          </button>
        </div>
      </div>
      {open ? (
        <div>
          <p>{title}</p>
          <p>{description}</p>
          <p>{duration}</p>
          <p>{obj.toISOString(date).substring(0, 10)}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SingleExercise;
