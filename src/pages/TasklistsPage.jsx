import { useState } from 'react'
import Tasklists from '../components/Tasklists'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { dbTasklistModel } from '../dbModel'

function TasklistsPage() {
  const [tasklistInput, setTasklistInput] = useState('')
  const [tasklists, setTasklistList] = useState(loadTasklists())

  function loadTasklists() {
    return dbTasklistModel.retrieveAll()
  }

  const handleNewTasklistFormSubmit = (event) => {
    event.preventDefault()
    const tasklist = {
      name: tasklistInput,
    }
    dbTasklistModel.create(tasklist)
    setTasklistList(loadTasklists())
  }

  const handleTasklistInputChange = (event) => {
    const tasklistValue = event.target.value
    setTasklistInput(tasklistValue)
  }

  return (
    <>
      <Header />
      <main>
        <div className="tasklist-form__container">
          <form
            className="tasklist-form"
            action=""
            method="post"
            onSubmit={handleNewTasklistFormSubmit}
          >
            <input
              className="tasklist-form__input"
              type="text"
              value={tasklistInput}
              onChange={handleTasklistInputChange}
            />
            <button className="tasklist-form__button" type="submit">
              Add
            </button>
          </form>
        </div>
        <Tasklists tasklists={tasklists} />
      </main>
      <Footer />
    </>
  )
}
export default TasklistsPage
