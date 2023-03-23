import { useEffect, useState } from 'react'
import TodoList from './TodoList'

function Todo() {
  const LOCALSTORAGE_DATA_KEY = 'todoapp.todoData'
  const LOCALSTORAGE_LAST_ID_KEY = 'todoapp.lastId'

  const [todoData, setTodoData] = useState([])
  const [todoLastId, setTodoLastId] = useState(0)
  const [todoInput, setTodoInput] = useState('')
  const [todoHiddenIdInput, setTodoHiddenIdInput] = useState('')
  const [todoEditMode, setTodoEditMode] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(LOCALSTORAGE_DATA_KEY)) {
      const storedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_DATA_KEY))
      if (storedData) {
        setTodoData(storedData)
      }
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem(LOCALSTORAGE_LAST_ID_KEY)) {
      const lastId = parseInt(
        localStorage.getItem(LOCALSTORAGE_LAST_ID_KEY),
        10,
      )
      if (lastId) {
        setTodoLastId(lastId)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_DATA_KEY, JSON.stringify(todoData))
  }, [todoData])

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_LAST_ID_KEY, parseInt(todoLastId, 10))
  }, [todoLastId])

  const handleTodoEditModeChange = (event) => {
    setTodoEditMode(event.target.checked)
  }

  const createTodo = (id, description, status) => ({ id, description, status })

  const handleSubmitToDoListForm = (event) => {
    event.preventDefault()
    if (todoInput.length < 4) return false

    const isUpdate = parseInt(todoHiddenIdInput, 10) >= 0

    if (isUpdate) {
      const editedId = parseInt(todoHiddenIdInput, 10)
      todoData.map((item) => {
        if (item.id === editedId) {
          return createTodo(item.id, todoInput, item.status)
        }
        return item
      })
    } else {
      const newToDo = createTodo(todoLastId + 1, todoInput, false)
      todoData.push(newToDo)
      setTodoLastId(todoLastId + 1)
    }
    setTodoData(todoData)
    setTodoInput('')
    setTodoHiddenIdInput('')
    return true
  }

  const handleTodoStatusChange = (event) => {
    const isChecked = event.target.checked
    const itemId = parseInt(event.target.getAttribute('data-id'), 10)

    const todoDataArr = todoData.map((item) => {
      if (item.id === itemId) {
        item.status = isChecked
      }
      return item
    })
    setTodoData(todoDataArr)
  }

  const handleTodoDescriptionChange = (event) => {
    const itemId = parseInt(event.target.getAttribute('data-id'), 10)
    const description = event.target.value

    const todoDataArr = todoData.map((item) => {
      if (item.id === itemId) {
        item.description = description
      }
      return item
    })
    setTodoData(todoDataArr)
  }

  const handleRemoveTodo = (event) => {
    const id = parseInt(event.target.getAttribute('data-id'), 10)
    const todoDataArr = todoData.filter((item) => item.id !== id)
    setTodoData(todoDataArr)
  }

  const handleTodoInputChange = (event) => {
    setTodoInput(event.target.value)
  }

  return (
    <div className="todolist__container">
      <div className="todolist__edit-mode">
        <label
          className="todolist__edit-mode-label"
          htmlFor="todoEditModeInput"
        >
          Edit Mode
          <input
            type="checkbox"
            id="todoEditModeInput"
            className="todolist__edit-mode-checkbox"
            defaultValue={todoEditMode}
            onChange={handleTodoEditModeChange}
          />
        </label>
      </div>
      <form
        action="/"
        className="todolist__form"
        onSubmit={handleSubmitToDoListForm}
      >
        <input
          type="text"
          className="todolist__input"
          placeholder="Enter todo here ..."
          value={todoInput}
          onChange={handleTodoInputChange}
        />
        <input type="hidden" value={todoHiddenIdInput} />
        <button
          type="button"
          className="todolist__add"
          onClick={handleSubmitToDoListForm}
        >
          Add
        </button>
      </form>
      <TodoList
        todoData={todoData}
        todoEditMode={todoEditMode}
        handleTodoStatusChange={handleTodoStatusChange}
        handleTodoDescriptionChange={handleTodoDescriptionChange}
        handleRemoveTodo={handleRemoveTodo}
      />
    </div>
  )
}

export default Todo
