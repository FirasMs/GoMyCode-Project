import "./enterlogin";
import image3 from "../../images/i3.jpg"
import image4 from "../../images/i4.jpg"
import { Navigate, useNavigate } from "react-router-dom";

const Enterlogin = () => {
    const navigate = useNavigate();
    return (
        <div className="parent">
            <div onClick={() => navigate('/babysitter')} className="option-card"
            >
                <img className="image" src={image3}></img>
                <div className="text">Babysitter
                </div>
            </div>
            <div onClick={() => navigate('/grandpacare')} className="option-card"
            >
                <img className="image" src={image4}></img>
                <div className="text">Grandpa care
                </div>
            </div>
        </div>
    );
};

export default Enterlogin;
