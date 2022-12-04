import React, { useState } from "react";
import TaskDataService from "../services/TaskService";

const Task = (props) => {
  const initialTaskState = {
    key: null,
    title: "",
    paragraph: "",
  };
  const [currentTask, setCurrentTask] = useState(initialTaskState);
  const [message, setMessage] = useState("");

  const { task } = props;
  if (currentTask.id !== task.id) {
    setCurrentTask(task);
    setMessage("");
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTask({ ...currentTask, [name]: value });
  };

  const updateTask = () => {
    const data = {
      title: currentTask.title,
      paragraph: currentTask.paragraph,
    };

    TaskDataService.update(currentTask.id, data)
      .then(() => {
        setMessage("The task was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteTask = () => {
    TaskDataService.remove(currentTask.id)
      .then(() => {
        props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentTask ? (
        <div className="edit-form">
          <h4>Task</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentTask.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="paragraph">paragraph</label>
              <input
                type="text"
                className="form-control"
                id="paragraph"
                name="paragraph"
                value={currentTask.paragraph}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteTask}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateTask}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Task...</p>
        </div>
      )}
    </div>
  );
};

export default Task;
