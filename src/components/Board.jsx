import { Link } from 'react-router-dom'
import { useState } from 'react'
import { dbTaskModel, dbTasklistModel } from '../dbModel'
import TasklistItem from './TasklistItem'

function Board() {
  const [tasklists, setTasklists] = useState(loadTasklists())

  const handleTaskStatusChange = (event) => {
    const isChecked = event.target.checked
    const taskId = parseInt(event.target.getAttribute('data-id'), 10)
    dbTaskModel.update(taskId, { isDone: isChecked })
    setTasklists(loadTasklists())
  }

  const handleTaskDescriptionChange = (event) => {
    const taskId = parseInt(event.target.getAttribute('data-id'), 10)
    const description = event.target.value
    dbTaskModel.update(taskId, { description })
    setTasklists(loadTasklists())
  }

  const handleTaskRemove = (event) => {
    const taskId = parseInt(event.target.getAttribute('data-id'), 10)
    dbTaskModel.delete(taskId)
    setTasklists(loadTasklists())
  }

  function loadTasklists() {
    return dbTasklistModel.retrieveAllWithTasks()
  }

  const boardRendered = tasklists.map((item) => (
    <div className="board__element" key={item.id}>
      <div className="board__element-header">
        <Link to={`/tasklist/${item.id}`}>{item.name}</Link>
      </div>
      <ul className="board__element-tasks">
        {filterTasksNotDone(item.tasks).map((task) => (
          <TasklistItem
            id={task.id}
            description={task.description}
            isDone={task.isDone}
            isEditMode={false}
            handleTaskStatusChange={handleTaskStatusChange}
            handleTaskDescriptionChange={handleTaskDescriptionChange}
            handleTaskRemove={handleTaskRemove}
          />
        ))}
        {filterTasksDone(item.tasks).map((task) => (
          <TasklistItem
            id={task.id}
            description={task.description}
            isDone={task.isDone}
            isEditMode={false}
            handleTaskStatusChange={handleTaskStatusChange}
            handleTaskDescriptionChange={handleTaskDescriptionChange}
            handleTaskRemove={handleTaskRemove}
          />
        ))}
      </ul>
    </div>
  ))

  function filterTasksDone(tasks) {
    return tasks.filter((task) => !!task.isDone)
  }

  function filterTasksNotDone(tasks) {
    return tasks.filter((task) => !task.isDone)
  }

  return <div className="board__container">{boardRendered}</div>
}
export default Board
