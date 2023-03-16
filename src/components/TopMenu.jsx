import { memo } from 'react'
import TopMenuItem from './TopMenuItem'

function TopMenu() {
  const menuItems = [
    { id: 0, title: 'ToDo', route: '/' },
    { id: 1, title: 'Budget', route: '/budget' },
  ]

  const menuItemsRendered = memo(() =>
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

export default TopMenu
