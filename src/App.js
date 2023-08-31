import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

const App = () => {
  const [authUser, setAuthUser] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSignUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      {authUser ? (
        <Box width="480px" sx={{ width: { xl: "1448px" } }} m="auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>
          <Footer />
        </Box>
      ) : (
        <Routes>
          <Route
            path="/signup"
            element={
              <SignUp
                handleSignUp={handleSignUp}
                setShowSignUp={setShowSignUp}
              />
            }
          />
          <Route
            path="/"
            element={
              <Login handleLogin={handleLogin} setShowSignUp={setShowSignUp} />
            }
          />
        </Routes>
      )}
    </>
  );
};

export default App;
