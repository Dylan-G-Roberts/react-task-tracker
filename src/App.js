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

  return (
    <div className="App">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
