import React from "react";
import NavBar from "./Components/NavBar";
import AddExercise from "./Components/AddExercise";
import { Route, Router, Routes } from "react-router-dom";
import DisplayExercise from "./Components/DisplayExercise";

function App() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <NavBar username={"Pratham Doke"} />
      <Routes>
        <Route path="/" element={<DisplayExercise />} />
        <Route
          path="/addexercise"
          element={<AddExercise email={"pratham.doke.1602@gmail.com"} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
