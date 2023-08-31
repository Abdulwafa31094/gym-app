// import React, { useState } from "react";
// // import firebase from "../firebaseConfig";

// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { Link } from "react-router-dom";
// import { auth } from "../firebase";

// const SignUp = ({ handleSignUp, setShowSignUp }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSignUpSubmit = async (e) => {
//     e.preventDefault();

//      createUserWithEmailAndPassword(auth,email, password)
//       .then((userCredential)=>{
//         console.log(userCredential);
//         handleSignUp(email, password);
//         setError(null);
//       })
//       .catch((error)=>{
//         console.log(error);
//         setError(error.message);
//       });

//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="max-w-md w-full bg-white p-8 rounded shadow">
//         <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <form onSubmit={handleSignUpSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block font-semibold">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={handleEmailChange}
//               className="w-full px-3 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block font-semibold">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={handlePasswordChange}
//               className="w-full px-3 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <button type="submit" className="block w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Sign Up</button>
//         </form>
//         <p className="mt-4 text-center">
//           Already have an account?{" "}
//           <Link to='/' className="text-blue-500 font-semibold focus:outline-none hover:underline">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const SignUp = ({ handleSignUp, setShowSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        handleSignUp(email, password);
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ bgcolor: "aqua" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Card
            variant="outlined"
            sx={{
              border: "2px solid #00F0FF",
              borderRadius: "10px",
              boxShadow: 20,
            }}
          >
            <CardContent>
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              {error && (
                <Typography color="error" sx={{ mt: 2 }}>
                  {error}
                </Typography>
              )}
              <form onSubmit={handleSignUpSubmit} sx={{ mt: 3 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </form>
              <Link to="/">Already have an account? Login</Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
