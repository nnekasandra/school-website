import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Found(){
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/home')
        }, 5000);
    }, [navigate])
    return(
        <div>Not Found Go Back</div>
    );
}
export default Found;