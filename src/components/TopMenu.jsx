import TopMenuItem from './TopMenuItem'

function TopMenu() {
  const menuItems = [
    // { id: 1, title: 'New', route: '/tasklists' },
    { id: 2, title: 'Tasklists', route: '/tasklists' },
    // { id: 3, title: 'Recurring Tasks', route: '/tasklist/1' },
    // { id: 4, title: 'Settings', route: '/tasklist/1' },
    { id: 5, title: 'Board', route: '/board' },
    { id: 6, title: 'logout', route: '/' },
  ]

  const menuItemsRendered = menuItems.map((item) => (
    <TopMenuItem
      key={item.id}
      id={item.id}
      title={item.title}
      route={item.route}
    />
  ))

  return (
    <div className="navbar__top-menu-container">
      <ul className="navbar__top-menu">{menuItemsRendered}</ul>
    </div>
  )
}

export default TopMenu
