import PropTypes from 'prop-types'
import TasklistContainer from '../components/TasklistContainer'
import Header from '../components/Header'
import Footer from '../components/Footer'

TasklistPage.propTypes = {
  tasklistId: PropTypes.number.isRequired,
}

function TasklistPage({ tasklistId }) {
  return (
    <>
      <Header />
      <main>
        <TasklistContainer tasklistId={tasklistId} />
      </main>
      <Footer />
    </>
  )
}
export default TasklistPage
