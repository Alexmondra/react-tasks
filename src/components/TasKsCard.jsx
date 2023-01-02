import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TasKsCard({ tasKs }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1>{tasKs.id}</h1>
      <h1 className="text-xl font-bold capitalize">{tasKs.title}</h1>
      <p className=" text-gray-500 text-sm">{tasKs.description} </p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(tasKs.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}
export default TasKsCard;
