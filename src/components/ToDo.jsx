import { useState } from 'react'
import ToDoList from './ToDoList'

function ToDo() {
  let storedToDoData = []
  if (
    localStorage.getItem('toDoData') !== null &&
    localStorage.getItem('toDoData') !== undefined
  ) {
    storedToDoData = JSON.parse(localStorage.getItem('toDoData'))
  }

  let storedToDolastId = 0
  if (
    localStorage.getItem('toDoLastId') !== null &&
    localStorage.getItem('toDoLastId') !== undefined
  ) {
    storedToDolastId = parseInt(localStorage.getItem('toDoLastId'), 10)
  }

  const [toDoData, setToDoData] = useState(storedToDoData)
  const [toDoLastId, setToDoLastId] = useState(storedToDolastId)
  const [toDoInput, setToDoInput] = useState('')
  const [toDoHiddenIdInput, setToDoHiddenIdInput] = useState('')

  const handleSubmitToDoListForm = (event) => {
    event.preventDefault()
    if (toDoInput.length < 4) {
      return false
    }

    let isUpdate = false
    if (toDoHiddenIdInput !== '' && parseInt(toDoHiddenIdInput, 10) >= 0) {
      isUpdate = true
    }

    if (isUpdate) {
      const editedId = parseInt(toDoHiddenIdInput, 10)
      toDoData.map((item) => {
        if (item.id === editedId) {
          const newToDo = {}
          newToDo.id = item.id
          newToDo.description = toDoInput
          newToDo.status = item.status
          return newToDo
        }
        return item
      })
      saveToDoData(toDoData)
    } else {
      const newToDo = {
        id: toDoLastId + 1,
        description: toDoInput,
        status: false,
      }
      toDoData.push(newToDo)
      saveToDoData(toDoData)
      setToDoLastId(toDoLastId + 1)
      localStorage.setItem('toDoLastId', parseInt(toDoLastId + 1, 10))
    }

    setToDoInput('')
    setToDoHiddenIdInput('')
    return true
  }

  const handleToDoStatusChange = (event) => {
    const isChecked = event.target.checked
    const itemId = parseInt(event.target.getAttribute('data-id'), 10)

    toDoData.map((item) => {
      if (item.id === itemId) {
        const newToDo = {}
        newToDo.id = item.id
        newToDo.description = item.description
        newToDo.status = isChecked
        return newToDo
      }
      return item
    })
    saveToDoData(toDoData)
  }

  const handleToDoDescriptionChange = (event) => {
    const itemId = parseInt(event.target.getAttribute('data-id'), 10)
    const description = event.target.value

    toDoData.map((item) => {
      if (item.id === itemId) {
        const newToDo = {}
        newToDo.id = item.id
        newToDo.description = description
        newToDo.status = item.status
        return newToDo
      }
      return item
    })
    saveToDoData(toDoData)
  }

  const handleRemoveToDo = (event) => {
    const id = event.target.getAttribute('data-id')
    const toDoDataArr = toDoData.filter((item) => item.id !== id)
    saveToDoData(toDoDataArr)
  }

  function saveToDoData(arr) {
    setToDoData(arr)
    localStorage.setItem('toDoData', JSON.stringify(arr))
  }

  const handleToDoInputChange = (event) => {
    setToDoInput(event.target.value)
  }

  return (
    <div className="todolist__container">
      <h4 className="todolist__header">To do or not to do</h4>
      <form
        action="/"
        className="todolist__form"
        onSubmit={handleSubmitToDoListForm}
      >
        <input
          type="text"
          className="todolist__input"
          placeholder="Enter todo here ..."
          value={toDoInput}
          onChange={handleToDoInputChange}
        />
        <input type="hidden" value={toDoHiddenIdInput} />
        <button
          type="button"
          className="todolist__add"
          onClick={handleSubmitToDoListForm}
        >
          Add
        </button>
      </form>
      <ToDoList
        toDoData={toDoData}
        handleToDoStatusChange={handleToDoStatusChange}
        handleToDoDescriptionChange={handleToDoDescriptionChange}
        handleRemoveToDo={handleRemoveToDo}
      />
    </div>
  )
}

export default ToDo
