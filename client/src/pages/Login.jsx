import { useState } from "react";
import { Navigate } from "react-router-dom";

/*
https://www.npmjs.com/package/react-toastify

Package for adding Toast messages to React
1. from Root, cd into client
2. Run npm install react-toastify 

*/
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
 
    /*
    Very Temporary solution until we add authentication, never use for production
    */

    if (!userName){
        toast.error("Username is empty");
    }
    
    else if(!password) {
        toast.error("Password is Empty");
    }

    else if (userName === "admin" && password === "password") {
      localStorage.setItem("token",true);
      setIsAuthenticated(true);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/adminLanding" />;
  }

  return (
    <>
      <h1 className="text-center">Login</h1>
      <form onSubmit={handleSubmit} className="text-center">
        <div className="userNameSection">
          <label>
            Username:
            <input
              className="text-black"
              type="text"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
        </div>

        <div className="passwordSection">
          <label>
            Password:
            <input
              type="password" 
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">Login</button>
        <ToastContainer />
      </form>
    </>
  );
}

export default Login;
