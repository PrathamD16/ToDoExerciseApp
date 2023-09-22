import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SingleExercise from "./SingleExercise";

function DisplayExercise({ emailId }) {
  const [list, setList] = useState([]);
  var req;

  useEffect(() => {
    async function getData() {
      req = await axios.get(`http://localhost:5000/exercise/user/${emailId}`);
      setList(req.data);
    }
    getData();
  }, []);

  return (
    <div className="mx-1 md:mx-0">
      {list.map((x) => {
        return (
          <SingleExercise
            date={x.date}
            duration={x.duration}
            id={x._id}
            description={x.description}
            title={x.title}
            key={x._id}
          />
        );
      })}
    </div>
  );
}

export default DisplayExercise;
