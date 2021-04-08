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
  console.log("delete ", id)
}

  return (
    <div className="App">
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
