import React, { useState /*, useEffect */ } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import TutorialDataService from "../services/TutorialService";
import Tutorial from "./Tutorial";

const TutorialsList = () => {
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const [tasks, loading, error] = useCollection(
    TutorialDataService.getAll().orderBy("title", "asc")
  );

  const setActiveTutorial = (task, index) => {
    const { title, paragraph } = task.data();

    setCurrentTutorial({
      id: task.id,
      title,
      paragraph,
    });

    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Tutorials List</h4>
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
                onClick={() => setActiveTutorial(task, index)}
                key={task.id}
              >
                {task.data().title}
                {/*task.title*/}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentTutorial ? (
          <Tutorial task={currentTutorial} />
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorialsList;
