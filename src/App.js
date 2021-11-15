import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Cita con el doctor',
        day: '16 de Febrero a las 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Reunion en Geekshubs',
        day: '17 de Febrero a las 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Hacer la compra',
        day: '18 de Febrero a las 5:30pm',
        reminder: false
    },
    {
      id: 4,
        text: 'Presentar el Proyecto en Geekshubs',
        day: '19 de Febrero a las 10:00am',
        reminder: true
    }
]);

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 100) + 1

  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id ? { ...task, reminder:
      !task.reminder } : task
    )
  )
}

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />}
    </div>
  );
}

export default App;
