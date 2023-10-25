import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Redirect() {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/")
    });
    return (<>
    {/* <Navigate to="/test"></Navigate> */}
    Redirecting...
    </>);
}

export default Redirect