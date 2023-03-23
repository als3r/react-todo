import PropTypes from 'prop-types'
import Todo from '../components/Todo'

TodoPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
}
function TodoPage({ isLoggedIn, handleLogout }) {
  return (
    <div>
      <header>
        <div className="logo">
          <h4 className="todolist__header">TaskMeister</h4>
        </div>
        <nav className="top-nav">
          <li className="nav-item">
            {isLoggedIn && (
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            )}
          </li>
        </nav>
      </header>
      <div>
        <Todo />
      </div>
    </div>
  )
}
export default TodoPage
