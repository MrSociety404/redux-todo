import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import Task from './Task'

const Tasks = ({ onDelete, onToggle, onEdit }) => {

  const todos = useSelector((state) => state.todos.value)
  
  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);


  return (
    <>
      {todos.map((task, index) => 
      (
        <Task key={task.id} task={task} index={index} />
      ))}
    </>
  )
}

export default Tasks