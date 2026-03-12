import { useState } from "react";

function TaskCard({ task, onDelete, onCancel, onUpdateStatus, onDetails }) {

  const [openMenu, setOpenMenu] = useState(false);

  const statusColor = {
    TODO: "bg-red-500",
    IN_PROGRESS: "bg-orange-400",
    DONE: "bg-green-500",
    CANCELLED: "bg-gray-500"
  };

  return (

    <div className="bg-slate-800 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition relative flex flex-col justify-between min-h-[140px]">

      {/* Header */}
      <div className="flex justify-between items-start">

        <h3 className="text-base font-semibold text-white">
          {task.title}
        </h3>

        {/* Menu */}
        <div className="relative">

          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="text-gray-400 hover:text-white text-lg"
          >
            ⋮
          </button>

          {openMenu && (
            <div className="absolute right-0 top-8 bg-slate-700 rounded-xl shadow-lg text-sm w-40 z-10">

              <button
                onClick={() => {
                  onUpdateStatus(task.id, "IN_PROGRESS");
                  setOpenMenu(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-slate-600"
              >
                🚧 En cours
              </button>

              <button
                onClick={() => {
                  onUpdateStatus(task.id, "DONE");
                  setOpenMenu(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-slate-600"
              >
                ✅ Terminé
              </button>

              <button
                onClick={() => {
                  onCancel(task.id);
                  setOpenMenu(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-slate-600"
              >
                ❌ Annuler
              </button>

              <button
                onClick={() => {
                  onDelete(task.id);
                  setOpenMenu(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white"
              >
                🗑 Supprimer
              </button>

            </div>
          )}

        </div>

      </div>

      {/* Bouton détails */}
      <div className="mt-4">

        <button
          onClick={() => onDetails(task)}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-xs"
        >
          Détails
        </button>

      </div>

      {/* Status en bas à droite */}
      <div className="flex justify-end mt-4">

        <span className={`text-xs px-3 py-1 rounded-full text-white ${statusColor[task.status]}`}>
          Statut : {task.status}
        </span>

      </div>

    </div>

  );
}

export default TaskCard;