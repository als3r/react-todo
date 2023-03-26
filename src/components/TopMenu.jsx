import {
  Outlet,
  Link,
  useLoaderData,
  Form,
  NavLink,
  redirect,
  useNavigation,
  useSubmit,
} from 'react-router-dom'
import TopMenuItem from './TopMenuItem'

function TopMenu() {
  const menuItems = [
    { id: 1, title: 'New Tasklist', route: '/tasklists' },
    { id: 2, title: 'Tasklists', route: '/tasklists' },
    { id: 3, title: 'Current Tasklist', route: '/tasklist/1' },
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
    <div className="nav">
      <ul className="top-nav">{menuItemsRendered}</ul>
    </div>
  )
}

export default TopMenu
