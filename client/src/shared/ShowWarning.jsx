import "./ShowWarning.css";
import {Link} from "react-router-dom"
function ShowWarning({showWarning,setShowWarning}){
    return(<div className="show-warning-container">
        <span>
            <h2>Warning</h2>
            <h5>You are not logedin please login and then write otherwise all the written content will be lost</h5>
            <div>
                <Link to="/login" className="link">Login</Link>
                <Link to="/write" className="link"
                onClick={()=>setShowWarning(!showWarning)}
                >Cancle</Link>
            </div>
        </span>
    </div>)
}
export default ShowWarning;