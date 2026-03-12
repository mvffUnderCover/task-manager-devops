function TaskDetailsModal({ task, onClose }) {
  return (

    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >

      <div
        className="bg-slate-800 text-white p-6 rounded-xl w-full max-w-md shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="flex justify-between mb-4">

          <h2 className="text-xl font-bold">{task.title}</h2>

          <button onClick={onClose}>✖</button>

        </div>

        <p className="text-gray-300 mb-4">
          {task.description}
        </p>

        <div className="space-y-2 text-sm">

          <p>📅 Début : {task.startDate}</p>
          <p>⏱ Fin : {task.endDate}</p>
          <p>📊 Statut : {task.status}</p>

        </div>

      </div>

    </div>

  );
}

export default TaskDetailsModal;