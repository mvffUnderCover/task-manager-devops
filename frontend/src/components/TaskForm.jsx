import { useState } from "react";


function TaskForm({ onAdd, onClose }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    const task = {
      title,
      description,
      endDate,
      status: "TODO"
    };

    onAdd(task);

    onClose();
  };

  return (

    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

      <div className="bg-slate-800 text-white p-6 rounded-xl shadow-xl w-full max-w-md">

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-xl font-bold">
            Nouvelle tâche
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✖
          </button>

        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-slate-700 text-white p-2 rounded outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-slate-700 text-white p-2 rounded outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="bg-slate-700 text-white p-2 rounded outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 p-2 rounded font-semibold"
          >
            Ajouter
          </button>

        </form>

      </div>

    </div>

  );
}

export default TaskForm;