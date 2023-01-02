import TaskForm from "./components/taskForm";
import TasKList from "./components/TasKList";



function App() {

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto" >
          <TaskForm />
      </div>
    
      <TasKList />
    </main>
  );
}

export default App;
