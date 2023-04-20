import { Link } from 'react-router-dom'
import { dbTasklistModel } from '../dbModel'
import TasklistItem from './TasklistItem'

function Board() {
  const tasklists = loadTasklists()

  function loadTasklists() {
    return dbTasklistModel.retrieveAllWithTasks()
  }

  const boardRendered = tasklists.map((item) => (
    <div className="board__element" key={item.id}>
      <div className="board__element-header">
        <Link to={`/tasklist/${item.id}`}>
          #{item.id}: {item.name}
        </Link>
      </div>
      <ul className="board__element-tasks">
        {filterTasksNotDone(item.tasks).map((task) => (
          <TasklistItem
            id={task.id}
            description={task.description}
            isDone={task.isDone}
            isEditMode={false}
            handleTaskStatusChange=""
            handleTaskDescriptionChange=""
            handleTaskRemove=""
          />
        ))}
        {filterTasksDone(item.tasks).map((task) => (
          <TasklistItem
            id={task.id}
            description={task.description}
            isDone={task.isDone}
            isEditMode={false}
            handleTaskStatusChange=""
            handleTaskDescriptionChange=""
            handleTaskRemove=""
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
