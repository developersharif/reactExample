import { Link } from "react-router-dom";


function Redirected(props) {
    return (
        <div>
            Redirected!
            <Link to="/">Home</Link>
        </div>
    );
}

export default Redirected;