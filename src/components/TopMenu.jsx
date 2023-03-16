import { useMemo } from 'react'

function TopMenu() {
  const menuItems = [
    { id: 0, title: 'ToDo', route: '/' },
    { id: 1, title: 'Budget', route: '/budget' },
  ]

  const menuItemsRendered = useMemo(() =>
    menuItems.map((item) => (
      <TopMenuItem
        key={item.id}
        id={item.id}
        title={item.title}
        route={item.route}
      />
    )),
  )

  return (
    <div className="nav">
      <ul className="top-nav">{menuItemsRendered}</ul>
    </div>
  )
}

function TopMenuItem({ id, title, route }) {
  return (
    <li key={id} className="top-nav__item">
      <a href={route} className="top-nav__item-link">
        {title}
      </a>
    </li>
  )
}

export default TopMenu
