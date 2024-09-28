import { useState } from "react";
import { Button, TextField, Container, Typography } from "@mui/material";

const Login = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [text, setText] = useState("");
  const [auth, setAuth] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "user" && pass === "password") {
      setAuth(true);
      setText(`Welcome ${name}`);
    } else {
      setText("Invalid username or password");
      setAuth(false);
    }
  };
  return (
    <Container maxWidth="sm">
      <div>
        <Typography variant="h1">
          Login Page
        </Typography>
        <div>
          {text && !auth && (
            <Typography variant="body1" >
              {text}
            </Typography>
          )}
        </div>
        {!auth && (
          <form onSubmit={handleSubmit}>
            <label>username:<input label="Username" value={name} type="text" onChange={(e) => setName(e.target.value)} required  /></label>
            <label>password:<input label="Username" value={pass} onChange={(e) => setPass(e.target.value)} type="password" required /></label>
            <Button
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </form>
        )}
        {auth && (
          <Typography variant="body1">
            Welcome, user!
          </Typography>
        )}
      </div>
    </Container>
  );
};

export default Login;
