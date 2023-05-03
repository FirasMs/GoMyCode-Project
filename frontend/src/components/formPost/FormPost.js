import React from 'react';
// import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
const FormPost = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    sex: "",
    country: "",
    category: "",
    experence: 0
  };
  const [values, setValues] = React.useState(initialState);
  const [image, setImage] = React.useState('');

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  const onChangeImage = e => {
    setImage(e.target.files[0])
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const file = new FormData();
    file.append("name", values.name);
    file.append("email", values.email);
    file.append("country", values.country);
    file.append("image", image);
    file.append("sex", values.sex);
    file.append("password", values.password);
    file.append("category", values.category);
    file.append("experence", values.experence);
    axios.post("http://localhost:5001/api/condidat/register", file);
    e.reset();
    setValues(initialState)
  };

  return (
    <div className="container">
      <div className="containerSign">
        <div className="signup">
          <div className="mb-5">
            <h3 className="textlog font-weight-bold text-theme">
              Submit as a babysitter or grandpa care
            </h3>
          </div>

          <form onSubmit={onSubmit}>
            <div className="input-field">
              <i className="fas fa-user"></i>

              <input type="text" name="name"
                value={values.name}
                onChange={handleChange} placeholder="Firstname" />
            </div>

            <div className="input-field">
              <i className="fas fa-envelope"></i>

              <input type="text" name="country"
                value={values.country}
                onChange={handleChange} placeholder="adress" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>

              <input type="email" name="email"
                value={values.email}
                onChange={handleChange} placeholder="exemple@gmail.Com" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>

              <input type="password" name="password"
                value={values.password}
                onChange={handleChange} placeholder="Password" />
            </div>
            <div className="input-field">
              <input type="text" name="experence"
                value={values.experence === 0 ? "" : values.experence }
                onChange={handleChange} placeholder="Experence" />
            </div>
            <br />
            <div>
              <input
                type="radio"
                name="sex"
                value="male"
                checked={values.sex === "male"}
                onChange={handleChange}
              /> Male
            </div>
            <div>
              <input
                type="radio"
                name="sex"
                value="female"
                checked={values.sex === "female"}
                onChange={handleChange}
              /> Female
            </div>
            <br />
            <div>
              {/* <Dropdown name="category"value={values.category}  onChange={handleChange}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  apply as:
                </Dropdown.Toggle>

                <Dropdown.Menu  >
                  <Dropdown.Item

                    value="Babysitter"
                  >Baby sitter</Dropdown.Item>
                  <Dropdown.Item
                    value="grandpa"

                  >Grandpa care</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <select name='category' value={values.category} onChange={handleChange}>

                <option value="Babysitter">Baby sitter</option>

                <option value="grandpa">Grandpa care</option>
              </select>
            </div>

            <br />
            <input
              type="file"
              id="file"
              name="image"
              value={values.image}
              onChange={onChangeImage}
              accept="image/*"
            />
            <button type="submit" className="bt btn-theme">
              Register
            </button>
            <p className="social-text">Or sign in with social platform</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPost;
