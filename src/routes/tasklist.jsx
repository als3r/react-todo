import PropTypes from 'prop-types'
import Todo from '../components/Todo'
import Header from '../components/Header'
import Footer from '../components/Footer'

TodoPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
}
function TodoPage({ isLoggedIn, handleLogout }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <main>
        <Todo />
      </main>
      <Footer />
    </>
  )
}
export default TodoPage
