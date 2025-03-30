import { useNavigate } from "react-router";

export default function Logout(){
    const navigate = useNavigate();

    const logoutUser = ()=>{
        localStorage.removeItem("token");
        navigate("/");
    }

    return(
       <button onClick={logoutUser}>Logout</button> 
    );
}