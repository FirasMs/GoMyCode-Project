const Formulaire = () => {
    return (
      <div className="cont">
        <div className="containerSign">
          <div className="signup">
            <div className="mb-5">
              <h3 className="textlog font-weight-bold text-theme">
                Create an account
              </h3>
            </div>
            <h6 className="h5 mb-0">Welcome back!</h6>
            <p className="text-muted mt-2 mb-5">
              Enter your email address and password to access admin panel.
            </p>
            <form>
              <div className="input-field">
                <i className="fas fa-user"></i>
  
                <input
                  type="text"
                  id="firstname"
                  placeholder="Firstname"
  
                  // value={firstName}
                />
              </div>
  
              <div className="input-field">
                <i className="fas fa-user"></i>
  
                <input
                  type="text"
                  id="lastname"
                  placeholder="Lastname"
  
                  // value={lastName}
                />
              </div>
  
              <div className="input-field">
                <i className="fas fa-user"></i>
  
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
  
                  // value={username}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
  
                <input
                  type="text"
                  id="email"
                  placeholder="email"
  
                  // value={email}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
  
                <input
                  type="password"
                  id="Password"
                  placeholder="Password"
  
                  // value={password}
                />
              </div>
  
              <button type="submit" className="bt btn-theme">
                Sign Up
              </button>
              <p className="social-text">Or sign in with social platform</p>
              <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Formulaire;
  