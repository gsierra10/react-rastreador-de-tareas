import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";


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
    }
]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
