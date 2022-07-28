import { useState } from 'react'
import './App.css'
import Users from './Pages/Users/Users'
import Todo from './Pages/Todo/Todo'

import Tarefa from './Components/Tarefa/Tarefa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Users></Users>
      <Todo></Todo>
      {/* <Tarefa titulo="beber agua" andamento='a fazer'></Tarefa> */}
    </div>
  )
}

export default App
