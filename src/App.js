import React, { createContext, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

import Services from "./pages/Services";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Header from "./components/Header";
export const AuthProvider = createContext();
function App() {
  const [admin, setAdmin] = useState(false);
  const [userLoggedIn,setUserLoggedIn]= useState(false);
  return (
    <>
      {admin ? (
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/tasks"} className="navbar-brand">
              Syntax-Solution-Admin
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/tasks"} className="nav-link">
                  Total Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/services"} className="nav-link">
                  View Client(Services) Site
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  admin,{"  "} Logout
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <h2>Admin Panel</h2>
            <AuthProvider.Provider value={{admin, setAdmin,userLoggedIn,setUserLoggedIn}}>
              <Switch>
                <Route exact path={"/tasks"} component={TasksList} />
                <Route exact path="/add" component={AddTask} />
                <Route exact path="/" component={Home} />
                <Route exact path="/services" component={Services} />
              </Switch>
            </AuthProvider.Provider>
          </div>
        </div>
      ) : (
        <>
          <AuthProvider.Provider value={{admin, setAdmin,userLoggedIn,setUserLoggedIn}}>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/services" component={Services} />
            </Switch>
          </AuthProvider.Provider>
        </>
      )}
      <AuthProvider.Provider value={{admin, setAdmin,userLoggedIn,setUserLoggedIn}}>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </AuthProvider.Provider>
    </>
  );
}

export default App;
