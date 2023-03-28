import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
// import { dbTaskModel } from '../dbModel'
import { dbTaskModel, dbTasklistModel } from '../dbModel'
import Tasklist from './Tasklist'

// const res1 = dbTasklistModel.create({ name: 'Test tasklist 1' })
// const res2 = dbTasklistModel.create({ name: 'Test tasklist 2' })
// const res3 = dbTaskModel.create({
//   tasklistId: 1,
//   description: 'Test task 1, tasklist 1',
//   isDone: false,
// })
// const res4 = dbTaskModel.create({
//   tasklistId: 1,
//   description: 'Test task 2, tasklist 1',
//   isDone: false,
// })
// const res5 = dbTaskModel.create({
//   tasklistId: 2,
//   description: 'Test task 3, tasklist 2',
//   isDone: false,
// })
// const tasksTest = dbTaskModel.retrieveAllForTasklist(1)
// const tasklistsTest = dbTasklistModel.retrieveWithTasks(1)
// console.log(res1)
// console.log(res2)
// console.log(res3)
// console.log(res4)
// console.log(res5)
// console.log(tasksTest)
// console.log(tasklistsTest)

TasklistContainer.propTypes = {
  tasklistId: PropTypes.number.isRequired,
}

function TasklistContainer({ tasklistId }) {
  // const [tasklistData, setTasklistData] = useState([])
  const [taskInput, setTaskInput] = useState('')
  const [isEditMode, setIsEditMode] = useState(false)

  let tasklistData = dbTasklistModel.retrieveWithTasks(tasklistId)

  console.log(tasklistData)

  // useEffect(() => {
  //   setTasklistData(dbTasklistModel.retrieveWithTasks(tasklistId))
  // }, [])

  const handleTaskEditModeChange = (event) => {
    setIsEditMode(event.target.checked)
  }

  const createTask = (description, isDone) => ({
    tasklistId,
    description,
    isDone,
  })

  const handleSubmitToDoListForm = (event) => {
    event.preventDefault()
    if (taskInput.length < 4) return false

    const newTask = createTask(taskInput, false)

    dbTaskModel.create(newTask)
    tasklistData = dbTaskModel.retrieveAllForTasklist(tasklistId)
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
    tasklistData = todoDataArr
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
    tasklistData = todoDataArr
  }

  const handleTaskRemove = (event) => {
    const taskId = parseInt(event.target.getAttribute('data-id'), 10)
    dbTaskModel.delete(taskId)
    tasklistData = dbTaskModel.retrieveAllForTasklist(tasklistId)
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
      <div className="tasklist__form__header">{tasklistData.name}</div>
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
        <button type="submit" className="tasklist__add">
          Add
        </button>
      </form>
      <Tasklist
        tasksData={tasklistData.tasks !== 'undefined' ? tasklistData.tasks : []}
        isEditMode={isEditMode}
        handleTaskStatusChange={handleTaskStatusChange}
        handleTaskDescriptionChange={handleTaskDescriptionChange}
        handleTaskRemove={handleTaskRemove}
      />
    </div>
  )
}

export default TasklistContainer
