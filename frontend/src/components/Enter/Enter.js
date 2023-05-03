import "./enter.css";
import image1 from "../../images/i1.jpg";
import image2 from "../../images/i2.jpg";
import { useNavigate } from "react-router-dom";

const Enter = () => {
  const navigate = useNavigate();
  return (
    <div className="parent">
      <div onClick={() => navigate("/babysitter")} className="option-card">
        <img className="image" src={image1} alt=""></img>
        <div className="text">Babysitter</div>
      </div>
      <div onClick={() => navigate("/grandpacare")} className="option-card">
        <img className="image" src={image2} alt=""></img>
        <div className="text">Grandpa care</div>
      </div>
    </div>
  );
};

export default Enter;
