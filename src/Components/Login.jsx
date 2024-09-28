import { useState } from "react";

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
                Username:<input type="text" name="name" id="name" label="Username" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                    Password:<input type="text" name="pass" label="Password" id="pass" value={pass} onChange={(e) => setPass(e.target.value)} required/>
                
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
