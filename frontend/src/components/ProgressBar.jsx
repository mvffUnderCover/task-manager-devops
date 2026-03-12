function ProgressBar({ tasks }) {

  const total = tasks.length;

  const done = tasks.filter(
  (task) => task.status?.toUpperCase() === "DONE"
   ).length;

  const percentage = total === 0
    ? 0
    : Math.round((done / total) * 100);

  let color = "bg-red-500";

  if (percentage >= 70) {
    color = "bg-green-500";
  } else if (percentage >= 40) {
    color = "bg-orange-400";
  }

  return (

    <div className="bg-slate-800 text-white p-5 rounded-2xl shadow-lg mb-6">

      <div className="flex justify-between mb-2">

        <span className="font-semibold">
          Progression des tâches
        </span>

        <span className="font-semibold">
          {percentage}%
        </span>

      </div>

      <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">

        <div
          className={`${color} h-4 rounded-full transition-all duration-700 shadow-lg`}
          
          style={{ width: `${percentage}%` }}
        />

      </div>

      <p className="text-xs text-gray-400 mt-2">
        {done} tâches terminées sur {total} {console.log(tasks)}
      </p>

    </div>

  );
}

export default ProgressBar;