// import React, { useState } from "react";

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { Link } from "react-router-dom";
// import { auth } from "../firebase";

// const Login = ({ handleLogin, setShowSignUp }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();

//     signInWithEmailAndPassword(auth,email, password)
//     .then((userCredential)=>{
//        console.log(userCredential)
//     })
//     .catch((error) =>{
//       setError(error.message);
//     })
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="max-w-md w-full bg-white p-8 rounded shadow">
//         <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <form onSubmit={handleLoginSubmit}>
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
//           <button onClick={handleLogin} type="submit" className="block w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Login</button>
//         </form>
//         <p className="mt-4 text-center">
//           Don't have an account?{" "}
//           <Link to='/signup' onClick={() => setShowSignUp(true)}  className="text-blue-500 font-semibold focus:outline-none hover:underline">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Login = ({ handleLogin, setShowSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ bgcolor: "aqua" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
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
              <Typography component="h1" variant="h4" align="center">
                Login
              </Typography>
              {error && (
                <Typography color="error" align="center" sx={{ mt: 2 }}>
                  {error}
                </Typography>
              )}
              <form onSubmit={handleLoginSubmit} sx={{ mt: 3 }}>
                <Box sx={{ mb: 2 }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    label="Email Address"
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </Box>
                <Button type="submit" fullWidth variant="contained">
                  Login
                </Button>
              </form>
              <Link
                to="/signup"
                onClick={() => setShowSignUp(true)}
                style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Don't have an account? Sign Up
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
