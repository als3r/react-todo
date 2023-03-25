import PropTypes from 'prop-types'
import NewTaskListForm from '../components/Tasklists'
import Header from '../components/Header'
import Footer from '../components/Footer'

NewTasklistPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
}
function NewTasklistPage({ isLoggedIn, handleLogout }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <main>
        <NewTaskListForm />
      </main>
      <Footer />
    </>
  )
}
export default NewTasklistPage
