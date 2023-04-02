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
  const [selectedTasklistId, setSelectedTasklistId] = useState(tasklistId)
  const [tasklistData, setTasklistData] = useState({
    id: 0,
    name: 'Test',
    tasks: [],
  })
  const [taskInput, setTaskInput] = useState('')
  const [isEditMode, setIsEditMode] = useState(false)
  const [tasklistName, setTasklistName] = useState('')

  useEffect(() => {
    setTasklistData(
      dbTasklistModel.retrieveWithTasks(parseInt(selectedTasklistId, 10)),
    )
    loadTasklistsOptions()
  }, [])

  useEffect(() => {
    setTasklistData(
      dbTasklistModel.retrieveWithTasks(parseInt(selectedTasklistId, 10)),
    )
    loadTasklistsOptions()
  }, [selectedTasklistId])

  useEffect(() => {
    setTasklistName(tasklistData.name)
    loadTasklistsOptions()
  }, [tasklistData])

  const handleTaskEditModeChange = (event) => {
    setIsEditMode(event.target.checked)
  }

  const createTask = (description, isDone) => ({
    tasklistId: parseInt(selectedTasklistId, 10),
    description,
    isDone,
  })

  const handleSubmitToDoListForm = (event) => {
    event.preventDefault()
    if (taskInput.length < 4) return false

    const newTask = createTask(taskInput, false)

    dbTaskModel.create(newTask)
    setTasklistData(
      dbTasklistModel.retrieveWithTasks(parseInt(selectedTasklistId, 10)),
    )
    setTaskInput('')
    return true
  }

  const handleTaskStatusChange = (event) => {
    const isChecked = event.target.checked
    const taskId = parseInt(event.target.getAttribute('data-id'), 10)
    dbTaskModel.update(taskId, { isDone: isChecked })
    setTasklistData(
      dbTasklistModel.retrieveWithTasks(parseInt(selectedTasklistId, 10)),
    )
  }

  const handleTaskDescriptionChange = (event) => {
    const taskId = parseInt(event.target.getAttribute('data-id'), 10)
    const description = event.target.value
    dbTaskModel.update(taskId, { description })
    setTasklistData(
      dbTasklistModel.retrieveWithTasks(parseInt(selectedTasklistId, 10)),
    )
  }

  const handleTaskRemove = (event) => {
    const taskId = parseInt(event.target.getAttribute('data-id'), 10)
    dbTaskModel.delete(taskId)
    setTasklistData(
      dbTasklistModel.retrieveWithTasks(parseInt(selectedTasklistId, 10)),
    )
  }

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value)
  }

  const handleTasklistSelectChange = (event) => {
    setSelectedTasklistId(parseInt(event.target.value, 10))
  }

  const handleTasklistNameChange = (event) => {
    dbTasklistModel.update(selectedTasklistId, { name: event.target.value })
    setTasklistName(event.target.value)
    loadTasklistsOptions()
  }

  const [tasklistOptions, setTasklistOptions] = useState([])
  function loadTasklistsOptions() {
    const arr = Array.from(dbTasklistModel.getTasklists()).map((item) => (
      <option key={item[1].id} value={item[1].id}>
        {`#${item[1].id} : ${item[1].name}`}
      </option>
    ))
    setTasklistOptions(arr)
  }

  return (
    <div className="tasklist__container">
      <div className="tasklist__selector">
        <div className="tasklist-selector__form-header">Tasklist</div>
        <form action="" className="tasklist-selector__form">
          <select
            name="tasklist-selector"
            id="tasklist-selector"
            className="form-input tasklist-selector__select"
            onChange={handleTasklistSelectChange}
          >
            {tasklistOptions}
          </select>
        </form>
      </div>

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
      <div className="tasklist__form__header">
        {!!isEditMode && (
          <input
            type="text"
            className="form-input tasklist-edit"
            value={tasklistName}
            onChange={handleTasklistNameChange}
          />
        )}
        {!isEditMode && tasklistName}
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
        <button type="submit" className="form-submit tasklist__add">
          Enter
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
