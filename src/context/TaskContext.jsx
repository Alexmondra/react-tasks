import { createContext, useState ,useEffect} from "react";
import { tasKs as data } from "../data/TasKs";

export const TaskContext = createContext();

export function TaskContextProvide(props) {

  const [tasKs, setTasKs] = useState([]);

  function createTask(task) {
    setTasKs([
      ...tasKs,
      {
        title: task.title,
        id: tasKs.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskid) {
    setTasKs(tasKs.filter((tasKs) => tasKs.id !== taskid));
  }

  useEffect(() => {
    setTasKs(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasKs,
        deleteTask,
        createTask,
      }}
    >
      {" "}
      {props.children}
    </TaskContext.Provider>
  );
}
