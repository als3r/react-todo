import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

Tasklists.propTypes = {
  tasklists: PropTypes.array.isRequired,
}

function Tasklists({ tasklists }) {
  const tasklistsRendered = tasklists.map((item) => (
    <li className="tasklists__item" key={item.id}>
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
export default Tasklists
