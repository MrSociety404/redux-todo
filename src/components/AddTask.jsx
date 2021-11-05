import { useState } from "react";
import { useDispatch } from "react-redux";
import {v4 as uuidv4} from 'uuid';
import { addTodo } from "../features/todosSlice";

const AddTask = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const dispatch = useDispatch()

  /**
   * check and submit 
   * @param {event} e event
   */
  const onSubmit = (e) => {
    e.preventDefault()
    const id = uuidv4()
    if(!text) {
      alert('Please add text')
      return
    }
    dispatch(addTodo({ text, day, reminder, id }))

    setText('')
    setDay('')
    setReminder(false)

  }

  return (
    <form className="add-form" onSubmit={onSubmit} >
      <div className="form-control">
        <label>task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
