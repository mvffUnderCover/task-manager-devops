import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col">

      <Header />

      <main className="flex-grow">
        <TaskList />
      </main>

      <Footer />

    </div>
  );
}

export default App;