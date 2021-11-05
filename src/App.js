import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      {showAddTask && <AddTask/>}

      <Tasks />

      <Footer />
    </div>
  );
}

export default App;
