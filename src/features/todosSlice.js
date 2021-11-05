import { createSlice } from '@reduxjs/toolkit'

const loadTodos = JSON.parse(localStorage.getItem('todos')) 

const initialState = {
  value: loadTodos ? loadTodos : []
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload)
    },
    removeTodo: (state, action) => {
      state.value.splice(action.payload, 1)
    },
    toggleReminder: (state, action) => {
      state.value.forEach((todo) => {
        if(todo.id === action.payload) {
          todo.reminder = !todo.reminder
        }
      })
    },
    editTodo: (state, action) => {
      state.value.forEach((todo) => {
        if(todo.id === action.payload.id) {
          todo.text = action.payload.text
          todo.day = action.payload.day
          todo.reminder = action.payload.reminder
        }
      })
    }
  }
})

export const { addTodo, removeTodo, toggleReminder, editTodo } = todosSlice.actions

export default todosSlice.reducer