import React, { useContext } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase, { auth } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

import TaskDataService from "../services/TaskService";
import userservice from "../services/UserService";
import { AuthProvider } from "../App";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState("");
  const { admin, setAdmin, userLoggedIn, setUserLoggedIn } =
    useContext(AuthProvider);
  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user.email);

        if (user.email === "admin@gmail.com") {
          setAdmin(true);
        } else if (user.email !== "admin@gmail.com") {
          setAdmin(false);
          setUserLoggedIn(true);
        }
        history.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Login
                    </p>
                    {errorMsg && <p className="text-danger">{errorMsg}</p>}
                    <form className="mx-1 mx-md-4" onSubmit={handleLogin}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="form3Example3c">
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                          />

                          <p className="text-primary">
                            Admin Email: admin@gmail.com
                          </p>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="form3Example4c">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <p className="text-primary">
                            Admin Password: 12345678
                          </p>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                      </div>
                      <Link to={"/signup"}>
                        <p className="text-success">
                          Don't have a acoount?{" "}
                          <button className="badge badge-info">Signup</button>
                        </p>
                      </Link>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
