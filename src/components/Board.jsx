import { Link } from 'react-router-dom'

function Board() {
  const tasklistsRendered = tasklists.map((item) => (
    <li className="tasklists__item">
      <Link to={`/tasklist/${item.id}`}>
        #{item.id}: {item.name}
      </Link>
    </li>
  ))

  return (
    <div className="tasklist__container">
      <div className="tasklists__header">Tasklists</div>
      <ul className="tasklists__list">{tasklistsRendered}</ul>
    </div>
  )
}
export default Board
