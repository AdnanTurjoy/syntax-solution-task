import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tasks" className="navbar-brand">
          Syntax-Solution-Admin
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tasks"} className="nav-link">
              Tasks
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add Task
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <h2>Admin Panel</h2>
        <Switch>
          <Route exact path={["/", "/tasks"]} component={TasksList} />
          <Route exact path="/add" component={AddTask} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
