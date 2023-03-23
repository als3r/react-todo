import PropTypes from 'prop-types'
import LoginForm from '../components/LoginForm'

LoginPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
}
function LoginPage({ isLoggedIn, setIsLoggedIn, handleLogout }) {
  return (
    <>
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
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      </div>
    </>
  )
}
export default LoginPage
