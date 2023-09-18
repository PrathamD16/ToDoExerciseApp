import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditExercise() {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState("");

  const { id } = useParams();
  const nav = useNavigate();
  var obj = new Date();

  useEffect(() => {
    async function getSingleExercise() {
      const res = await axios.get(`http://localhost:5000/exercise/${id}`);
      setEmail(res.data.email);
      setTitle(res.data.title);
      setDesc(res.data.description);
      setDuration(Number(res.data.duration));
      setDate(obj.toISOString(res.data.date).substring(0, 10));
    }
    getSingleExercise();
  }, []);

  const editHandler = (e) => {
    const updatedOne = { email, title, description, duration, date };
    console.log(updatedOne);
    axios.patch(`http://localhost:5000/exercise/update/${id}`,updatedOne)
    .then(() => {
        nav('/')
        console.log("Success");
    })
    .catch(e => console.log(e))
    e.preventDefault();
  };

  return (
    <div className="my-3">
      <form className="p-2 lg:p-0 space-y-3" onSubmit={editHandler}>
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
              type="number  "
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
            Make Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditExercise;
