import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";
import ProgressBar from "./ProgressBar";
import TaskDetailsModal from "./TaskDetailsModal";
import { getTasks, createTask, deleteTask, cancelTask, updateStatus } from "../services/taskService";


function TaskList() {

  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const changeStatus = async (id, status) => {
  await updateStatus(id, status);
  loadTasks();
};

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async (task) => {
    await createTask(task);
    loadTasks();
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const cancel = async (id) => {
    await cancelTask(id);
    loadTasks();
  };

  return (

    <main className="max-w-5xl mx-auto p-6">

      {/* Bouton ajouter */}
      <div className="flex justify-center mb-6">

        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-slate-800 hover:bg-indigo-900 text-white px-5 py-3 rounded-lg shadow-lg transition"
        >
          ➕ Ajouter une tâche
        </button>

      </div>

      <ProgressBar tasks={tasks} />

      {/* Liste des tâches */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

        {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={removeTask}
          onCancel={cancel}
          onUpdateStatus={changeStatus}
          onDetails={setSelectedTask}
        />
      ))}

      </div>

      {/* Modal formulaire */}
      {showForm && (
        <TaskForm
          onAdd={addTask}
          onClose={() => setShowForm(false)}
        />
      )}

      {selectedTask && (
        <TaskDetailsModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
        />
      )}

    </main>
  );
}

export default TaskList;