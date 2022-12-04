import React, { useState /*, useEffect */ } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import TaskDataService from "../services/TaskService";
import Task from "./Task";

const TasksList = () => {
  const [currentTask, setCurrentTask] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const [tasks, loading, error] = useCollection(
    TaskDataService.getAll().orderBy("title", "asc")
  );

  const setActiveTask = (task, index) => {
    const { title, paragraph } = task.data();

    setCurrentTask({
      id: task.id,
      title,
      paragraph,
    });

    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Tasks List</h4>
        {error && <strong>Error: {error}</strong>}
        {loading && <span>Loading...</span>}
        <ul className="list-group">
          {!loading &&
            tasks &&
            tasks.docs.map((task, index /* tasks.map */) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveTask(task, index)}
                key={task.id}
              >
                {task.data().title}
                {/*task.title*/}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentTask ? (
          <Task task={currentTask} />
        ) : (
          <div>
            <br />
            <p>Please click on a Task...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksList;
