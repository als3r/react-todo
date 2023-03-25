import PropTypes from 'prop-types'

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
}

function Header({ isLoggedIn, handleLogout }) {
  return (
    <header>
      <div className="logo">
        <h4 className="todolist__header">TaskMeister</h4>
      </div>
      <nav className="top-nav">
        <li className="nav-item">
          <a href="/groups">New Tasklist</a>
        </li>
        <li className="nav-item">
          <a href="/groups">Tasks</a>
        </li>
        <li className="nav-item">
          {isLoggedIn && (
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          )}
        </li>
      </nav>
    </header>
  )
}
export default Header
