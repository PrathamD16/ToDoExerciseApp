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
  const editHandler = () => {
    nav(`/edit/${id}`)
  }

  return (
    <div className="mt-2 p-1 flex justify-between items-center">
      <div
        onClick={carouselHandler}
        className="text-base p-3 flex-1 bg-gradient-to-br from-blue-200 to-green-100 rounded-md"
      >
        <p className="font-semibold font-sans">{title}</p>
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
      <div className="ml-3 space-x-2 text-white">
        <button onClick={editHandler} className="bg-slate-500 py-1 px-5 hover:bg-slate-700 hover:-rotate-2 rounded-lg shadow-sm">
          Edit
        </button>
        <button
          onClick={deleteHandler}
          className="bg-red-500 py-1 px-3 hover:bg-red-700 hover:rotate-2 rounded-lg shadow-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default SingleExercise;
