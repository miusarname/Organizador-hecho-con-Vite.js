import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="relative rounded-xl overflow-auto">
      <div className="max-w-sm mx-auto bg-white shadow py-5 px-6">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block">
              <span class="block text-sm font-medium text-slate-700">
                Username
              </span>
            </label>
            <div className="mt-1">
              <input
                className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                type="text"
                placeholder="Escribe tu tarea"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
                autoFocus
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              for="Description"
              class="block text-sm font-medium text-slate-700"
            >
              Description
            </label>
            <div className="mt-1">
              <textarea
                className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                placeholder="Escribe la descripcion"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
                autoFocus
              ></textarea>
            </div>
          </div>
          <div className="mt-6 text-right">
            <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
