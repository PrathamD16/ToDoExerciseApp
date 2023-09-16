import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SingleExercise({ id, date, duration, description, title }) {
  const nav = useNavigate();
  var obj = new Date();
  // {obj.toISOString(date).substring(0, 10)}

  const [open, setOpen] = useState(false);

  const carouselHandler = () => setOpen(!open);
  const deleteHandler = () => {
    axios
      .delete(`http://localhost:5000/exercise/${id}`)
      .then(() => {
        console.log("Exercise deleted");
        window.location.reload();
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="mt-2 p-1 flex justify-between items-center">
      <div
        onClick={carouselHandler}
        className="text-base p-3 flex-1 bg-gradient-to-b from-blue-300 rounded-md"
      >
        <p className="font-semibold">{title}</p>
        {open ? (
          <div className="text-base">
            <p>Duration: {duration} min</p>
            <p>Date: {obj.toISOString(date).substring(0, 10)}</p>
            <p>Description: {description}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="mx-3 space-x-5 text-white">
        <button className="bg-slate-500 py-1 px-4 hover:bg-slate-700 hover:-rotate-2 rounded-lg shadow-sm">
          Edit
        </button>
        <button
          onClick={deleteHandler}
          className="bg-red-500 py-1 px-2 hover:bg-red-700 hover:rotate-2 rounded-lg shadow-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default SingleExercise;
