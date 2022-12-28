import React from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function CardTask({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="mb-6 border-b border-slate-200 pb-2 text-base font-semibold border-t shadow-md  ">
      <h1 className="text-xl text-slate-900 font-semibold group-hover:text-white text-center">{task.title}</h1>
      <p className="text-lg text-slate-500 group-hover:text-white text-center">{task.description}</p>
      <button
      className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white "
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default CardTask;
