import { useState } from 'react' 
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Docs',
        day: 'February 5th at 2:30pm',
        reminder:true
    },
    {
        id: 2,
        text: 'Docs',
        day: 'February 5th at 2:30pm',
        reminder:true
    },
    {
        id: 3,
        text: 'Docs',
        day: 'February 5th at 2:30pm',
        reminder:true
    }
])

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="App">
      <Header/>
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask}/>
      ) : (
        'no tasks to show'
        )}
    </div>
  );
}

export default App;
