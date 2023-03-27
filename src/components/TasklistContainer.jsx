import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { dbTaskModel, dbTasklistModel } from '../dbModel'
import Tasklist from './Tasklist'

const res1 = dbTasklistModel.create({ name: 'Test tasklist 1' })
const res2 = dbTasklistModel.create({ name: 'Test tasklist 2' })
const res3 = dbTaskModel.create({
  tasklistId: 1,
  description: 'Test task 1, tasklist 1',
  isDone: false,
})
const res4 = dbTaskModel.create({
  tasklistId: 1,
  description: 'Test task 2, tasklist 1',
  isDone: false,
})
const res5 = dbTaskModel.create({
  tasklistId: 2,
  description: 'Test task 3, tasklist 2',
  isDone: false,
})
const tasksTest = dbTaskModel.retrieveAllForTasklist(1)
const tasklistsTest = dbTasklistModel.retrieveWithTasks(1)
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)
console.log(tasksTest)
console.log(tasklistsTest)

TasklistContainer.propTypes = {
  tasklistId: PropTypes.number.isRequired,
}

function TasklistContainer({ tasklistId }) {
  const [tasklistData, setTasklistData] = useState([])
  const [taskInput, setTaskInput] = useState('')
  const [isEditMode, setIsEditMode] = useState(false)

  useEffect(() => {
    setTasklistData(dbTaskModel.retrieveAllForTasklist(tasklistId))
  }, [])

  const handleTaskEditModeChange = (event) => {
    setIsEditMode(event.target.checked)
  }

  const createTodo = (description, isDone) => ({
    tasklistId,
    description,
    isDone,
  })

  const handleSubmitToDoListForm = (event) => {
    event.preventDefault()
    if (taskInput.length < 4) return false

    const newToDo = createTodo(taskInput, false)
    tasklistData.push(newToDo)

    setTasklistData(tasklistData)
    setTaskInput('')
    return true
  }

  const handleTaskStatusChange = (event) => {
    const isChecked = event.target.checked
    const itemId = parseInt(event.target.getAttribute('data-id'), 10)

    const todoDataArr = tasklistData.map((item) => {
      if (item.id === itemId) {
        item.isDone = isChecked
      }
      return item
    })
    setTasklistData(todoDataArr)
  }

  const handleTaskDescriptionChange = (event) => {
    const itemId = parseInt(event.target.getAttribute('data-id'), 10)
    const description = event.target.value

    const todoDataArr = tasklistData.map((item) => {
      if (item.id === itemId) {
        item.description = description
      }
      return item
    })
    setTasklistData(todoDataArr)
  }

  const handleTaskRemove = (event) => {
    const id = parseInt(event.target.getAttribute('data-id'), 10)
    const todoDataArr = tasklistData.filter((item) => item.id !== id)
    setTasklistData(todoDataArr)
  }

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value)
  }

  return (
    <div className="tasklist__container">
      <div className="tasklist__edit-mode">
        <label
          className="tasklist__edit-mode-label"
          htmlFor="todoEditModeInput"
        >
          Edit Mode
          <input
            type="checkbox"
            id="todoEditModeInput"
            className="tasklist__edit-mode-checkbox"
            defaultValue={isEditMode}
            onChange={handleTaskEditModeChange}
          />
        </label>
      </div>
      <form
        action="/"
        className="tasklist__form"
        onSubmit={handleSubmitToDoListForm}
      >
        <input
          type="text"
          className="tasklist__input"
          placeholder="Enter todo here ..."
          value={taskInput}
          onChange={handleTaskInputChange}
        />
        <button
          type="button"
          className="tasklist__add"
          onClick={handleSubmitToDoListForm}
        >
          Add
        </button>
      </form>
      <Tasklist
        tasklistData={tasklistData}
        isEditMode={isEditMode}
        handleTaskStatusChange={handleTaskStatusChange}
        handleTaskDescriptionChange={handleTaskDescriptionChange}
        handleTaskRemove={handleTaskRemove}
      />
    </div>
  )
}

export default TasklistContainer
