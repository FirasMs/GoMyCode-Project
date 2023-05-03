import { Register } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SingUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };

    dispatch(Register(user, navigate));
  };

  return (
    <div className="cont">
      <div className="containerSign">
        <div className="signup">
          <div className="mb-5">
            <h3 className="textlog font-weight-bold text-theme">
              Create an account
            </h3>
          </div>

          <form onSubmit={handleOnSubmit}>
            <div className="input-field">
              <i className="fas fa-user"></i>

              <input
                type="text"
                id="firstname"
                placeholder="Firstname"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-field">
              <i className="fas fa-envelope"></i>

              <input
                type="text"
                id="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>

              <input
                type="password"
                id="Password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="bt btn-theme">
              Sign Up
            </button>
            <p className="social-text">Or sign in with social platform</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
