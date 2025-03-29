import { useState } from "react";

function Login(){
    const [userName,setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated,setIsAuthenticated] = useState(false);


    const setUserInputs = (props)=>{

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return (
        <>
         <h1>Login</h1>
        
            <form onSubmit={handleSubmit}>

            <div className="userNameSection">
            <label>
            <input 
            type="text"
            name="username"
            value={userName}
            onChange={setUserInputs}
            />

            </label>   
            </div>

            <div className="passwordSection">


            </div>

            <button type="submit"> 
                Login
            </button>

            </form>
        </>
    );
}
export default Login;