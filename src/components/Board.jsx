import { Link } from 'react-router-dom'
import { dbTasklistModel } from '../dbModel'

function Board() {
  const tasklists = loadTasklists()

  function loadTasklists() {
    return dbTasklistModel.retrieveAllWithTasks()
  }

  console.log(loadTasklists())

  const boardRendered = tasklists.map((item) => (
    <div className="board__element" key={item.id}>
      <div className="board__element-header">
        <Link to={`/tasklist/${item.id}`}>
          #{item.id}: {item.name}
        </Link>
      </div>
      <ul className="board__element-tasks">
        {item.tasks.map((task) => (
          <li
            className={`board__element-task ${
              task.isDone && 'board__element-task--done'
            }`}
          >
            {task.description}
          </li>
        ))}
      </ul>
    </div>
  ))

  return <div className="board__container">{boardRendered}</div>
}
export default Board
