import { ClipboardList } from "lucide-react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-6 shadow-lg">

      <div className="flex items-center justify-center gap-3">

        <ClipboardList size={36} className="text-indigo-400"/>

        <h1 className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
          Gestionnaire de tâches
        </h1>

      </div>

      <p className="text-center text-gray-400 mt-2 text-sm">
        Organisez vos tâches et suivez votre progression
      </p>

    </header>
  );
}

export default Header;