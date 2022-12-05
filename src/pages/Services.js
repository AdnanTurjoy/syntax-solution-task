import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import TaskDataService from "../services/TaskService";
import "../css/style.css";
function Services(props) {
  const [tasks, loading, error] = useCollection(
    TaskDataService.getAll().orderBy("title", "asc")
  );
  //console.log(tasks?.docs);
  return (
    <div>
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <h2>Services</h2>
          </div>
        </div>
      </section>
      <section id="services" className="services">
        <div className="container">
          {error && <strong>Error: {error}</strong>}
          {loading && <span>Loading...</span>}
          <div className="row">
            {!loading &&
              tasks &&
              tasks.docs.map((task, index /* tasks.map */) => {
                return (
                  <div className="col-md-6" key={index}>
                    <div className="icon-box">
                      <i className="bi bi-briefcase"></i>
                      <h4>
                        <a href="#">{task.data().title}</a>
                      </h4>
                      <p>{task.data().paragraph}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
