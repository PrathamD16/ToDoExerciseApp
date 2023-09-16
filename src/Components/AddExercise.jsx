import axios from "axios";
import React, { useState } from "react";

//Email Id to be imported as props from google authentication
function AddExercise({ email }) {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    //post it to the
    const newExercise = { title, email, description, duration, date };
    axios.post('http://localhost:5000/exercise/add',newExercise)
    .then(() => console.log(newExercise))
    .catch(e => console.log(e)) 
    e.preventDefault()
  };

  return (
    <div className="my-3">
      <form className="p-2 lg:p-0 space-y-3" onSubmit={submitHandler}>
        {/* Exercise name */}
        <div>
          <p className="text-xl">Name of exercise</p>
          <div className="flex">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="border-2 flex-1 rounded-md py-2 p-1"
            />
          </div>
        </div>
        {/* Description */}
        <div>
          <p className="text-xl">Description</p>
          <div className="flex">
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              className="border-2 flex-1 rounded-md py-2 p-1"
            />
          </div>
        </div>
        {/* Duration*/}
        <div>
          <p className="text-xl">Time</p>
          <div className="flex">
            <input
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              type="number"
              className="border-2 flex-1 rounded-md py-2 p-1"
            />
          </div>
        </div>
        {/* Date */}
        <div>
          <p className="text-xl">Date</p>
          <div className="flex">
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="border-2 flex-1 rounded-md py-2 p-1"
            />
          </div>
        </div>
        <div className="py-3 flex">
          <button
            type="submit"
            className="bg-green-500 flex-1 py-2 rounded-md text-white hover:bg-green-800"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddExercise;
