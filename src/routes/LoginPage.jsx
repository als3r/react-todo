import PropTypes from 'prop-types'
import LoginForm from '../components/LoginForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

LoginPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
}
function LoginPage({ isLoggedIn, setIsLoggedIn, handleLogout }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <main>
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      </main>
      <Footer />
    </>
  )
}
export default LoginPage
