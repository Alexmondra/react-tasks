import TasKsCard  from "./TasKsCard";

import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TasKList() {

  const {tasKs} = useContext(TaskContext)


  if (tasKs.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">no hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasKs.map((tasKs) => (
        <TasKsCard key={tasKs.id} tasKs={tasKs} />
      ))}
    </div>
  );
}

export default TasKList;
