import React, { useState } from "react";

import { CREATE_USER, USER_LOGIN } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

import Auth from "../../utils/auth";

const NavBarTop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [registrationFormState, setRegistrationFormState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [createUser, { error }] = useMutation(CREATE_USER);

  const [loginFormState, setLoginFormState] = useState({
    email: "",
    password: "",
  });

  const [login, { error: loginError }] = useMutation(USER_LOGIN);

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const handleRegistrationChange = (event) => {
    const { name, value } = event.target;
    setRegistrationFormState({
      ...registrationFormState,
      [name]: value,
    });
  };

  const handleLoginFormChange = (event) => {
    const { name, value } = event.target;
    setLoginFormState({
      ...loginFormState,
      [name]: value,
    });
  };

  const handleRegistrationForm = async (event) => {
    event.preventDefault();
    console.log("Sending Data to Server...");
    const { data } = await createUser({
      variables: { ...registrationFormState, termsAccepted },
    });
    Auth.login(data.createUser.token);
  };

  const handleLoginForm = async (event) => {
    event.preventDefault();
    console.log(loginFormState);
    const { data } = await login({
      variables: { ...loginFormState },
    });

    Auth.login(data.login.token);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <div className="topnav flex">
        <div className="container flex">
          <div className="navicons flex">
            <a
              href="http://facebook.com/"
              target="_blank"
              title="facebook"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="http://x.com/"
              target="_blank"
              title="x"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="http://instagram.com/"
              target="_blank"
              title="instagram"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="http://youtube.com/"
              target="_blank"
              title="youtube"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>

          {Auth.loggedIn() ? (
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          ) : (
            <a href="#" className="srbtn btnLogin-popup" onClick={openModal}>
              Login | Register <i className="fa-solid fa-right-to-bracket"></i>
            </a>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="wrapper active-popup">
          <span className="icon-close" onClick={closeModal}>
            <i className="fa-solid fa-xmark"></i>
          </span>

          {isLogin ? (
            <div className="form-box login">
              <h2>Login</h2>
              <form action="#" onSubmit={handleLoginForm}>
                <div className="input-box">
                  <span className="icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    onChange={handleLoginFormChange}
                    required
                  />
                  <label>Email</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    onChange={handleLoginFormChange}
                    required
                  />
                  <label>Password</label>
                </div>
                <div className="remember-forgot">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" className="btn">
                  Login
                </button>
                <div className="login-register">
                  <p>
                    Don't have an account?{" "}
                    <a href="#" className="register-link" onClick={toggleForm}>
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div className="form-box register">
              <h2>Registration</h2>
              <form action="#" onSubmit={handleRegistrationForm}>
                {/* <div className="input-box">
                  <span className="icon">
                    <i className="fa-solid "></i>
                  </span>
                  <input
                    type="text"
                    name="name"
                    onChange={handleRegistrationChange}
                    required
                  />
                  <label>Name</label>
                </div> */}
                <div className="input-box">
                  <span className="icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    onChange={handleRegistrationChange}
                    required
                  />
                  <label>Email</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    onChange={handleRegistrationChange}
                    required
                  />
                  <label>Password</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={handleRegistrationChange}
                    required
                  />
                  <label>Confirm Password</label>
                </div>
                <div className="remember-forgot">
                  <label>
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={(event) =>
                        setTermsAccepted(event.target.checked)
                      }
                    />{" "}
                    I agree to the terms & conditions
                  </label>
                </div>
                <button type="submit" className="btn" disabled={!termsAccepted}>
                  Register
                </button>
                <div className="login-register">
                  <p>
                    Already have an account?{" "}
                    <a href="#" className="login-link" onClick={toggleForm}>
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NavBarTop;
