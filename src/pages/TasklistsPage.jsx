import Tasklists from '../components/Tasklists'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { dbTasklistModel } from '../dbModel'

function TasklistsPage() {
  const tasklists = loadTasklists()

  function loadTasklists() {
    return dbTasklistModel.retrieveAll()
  }

  return (
    <>
      <Header />
      <main>
        <Tasklists tasklists={tasklists} />
      </main>
      <Footer />
    </>
  )
}
export default TasklistsPage
