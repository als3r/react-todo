import PropTypes from 'prop-types'
import TopMenuItem from './TopMenuItem'

TopMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
}

function TopMenu({ menuItems }) {
  const menuItemsRendered = menuItems.map((item) => (
    <TopMenuItem
      key={item.id}
      id={item.id}
      title={item.title}
      route={item.route}
    />
  ))

  return (
    <div className="nav">
      <ul className="top-nav">{menuItemsRendered}</ul>
    </div>
  )
}

export default TopMenu
