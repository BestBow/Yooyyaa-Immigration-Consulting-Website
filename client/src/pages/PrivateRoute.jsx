import { Navigate, Outlet } from "react-router";

export default function PrivateRoute(){
    
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" />;
}
