import { NavLink } from 'react-router-dom'

function Logo() {
  return (
    <div className="navbar__logo-container">
      <NavLink to="/" title="TaskMeister logo" className="navbar__logo-link">
        TaskMeister
      </NavLink>
    </div>
  )
}
export default Logo
