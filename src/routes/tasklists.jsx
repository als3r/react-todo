import PropTypes from 'prop-types'
import TaskLists from '../components/Tasklists'
import Header from '../components/Header'
import Footer from '../components/Footer'

TasklistPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
}
function TasklistPage({ isLoggedIn, handleLogout }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <main>
        <TaskLists />
      </main>
      <Footer />
    </>
  )
}
export default TasklistPage
