import React, { useState } from "react";

import NavBar from "./Components/NavBar";
import AddExercise from "./Components/AddExercise";
import { Route, Routes } from "react-router-dom";
import DisplayExercise from "./Components/DisplayExercise";
import EditExercise from "./Components/EditExercise";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

function App() {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <div className="max-w-screen-lg mx-auto">
      <>
        <div className={signIn ? `hidden` : `inline-block`}>
          <GoogleLogin
            useOneTap
            onSuccess={(token) => {
              const decodeToken = jwt_decode(token.credential);
              setEmail(decodeToken.email);
              setUserName(decodeToken.name);
              setSignIn(true);
            }}
          />
        </div>

        {signIn ? (
          <>
            <NavBar username={userName} isSignedIn={signIn} />
            <Routes>
              <Route path="edit/:id" element={<EditExercise />} />
              <Route path="/" element={<DisplayExercise emailId={email} />} />
              <Route
                path="/addexercise"
                element={<AddExercise email={email} />}
              />
            </Routes>{" "}
          </>
        ) : (
          <></>
        )}
      </>
    </div>
  );
}

export default App;
