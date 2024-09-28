import { useState } from "react";
let Login = () => {
  let [name, setName] = useState("");
  let [pass, setPass] = useState("");
  let [text, setText] = useState("");
  let [auth, setAuth] = useState(false);

  let handleSubmit = (e) => {
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
      <div>
        <h1>
            Login Page
        </h1>
        <div>
          {text && !auth && (
            <p>
                {text}
            </p>
          )}
        </div>
        {!auth && (
          <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" placeholder="username" onChange={(e) => setName(e.target.value)} required  />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" placeholder="password" onChange={(e) => setPass(e.target.value)} required />
            </div>            
            <button type="submit">Submit</button>
          </form>
        )}
        {auth && (
          <p>
            Welcome, user!
          </p>
        )}
      </div>
  );
};

export default Login;
