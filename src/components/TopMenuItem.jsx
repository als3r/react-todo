import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

TopMenuItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
}

function TopMenuItem({ id, title, route }) {
  return (
    <li key={id} className="navbar__top-menu__item">
      <NavLink to={route} className="navbar__top-menu__link" title={title}>
        {title}
      </NavLink>
    </li>
  )
}

export default TopMenuItem
