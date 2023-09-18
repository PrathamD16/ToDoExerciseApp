import React from "react";

import NavBar from "./Components/NavBar";
import AddExercise from "./Components/AddExercise";
import { Route, Routes } from "react-router-dom";
import DisplayExercise from "./Components/DisplayExercise";
import EditExercise from "./Components/EditExercise";

function App() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <NavBar isSignedIn={true} username={"Pratham Doke"} />
      <Routes>
        <Route path="edit/:id" element={<EditExercise />} />
        <Route path="/" element={<DisplayExercise />} />
        <Route
          path="/addexercise"
          element={<AddExercise email={"pratham.doke.1602@gmail.com"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
