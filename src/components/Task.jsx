import { FaTimes, FaEdit } from "react-icons/fa";
import { useState } from "react";
import EditTask from './EditTask.jsx'
import { useDispatch } from "react-redux";
import { removeTodo , toggleReminder } from "../features/todosSlice.js";

const Task = ({ task, index }) => {
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch()

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => dispatch(toggleReminder(task.id))}
    >
      <h3>
        {task.text}{" "}
        <div>
          <FaTimes style={{ color: "red" }} onClick={() => dispatch(removeTodo(index))} />
          <FaEdit onClick={() => setEdit(!edit)} />
        </div>
      </h3>
      {edit ? (
        <EditTask task={task} onClose={() => setEdit(!edit)}/>
      ) : (
        <p> {task.day} </p>
      )}
    </div>
  );
};

export default Task;
