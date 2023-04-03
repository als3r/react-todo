import PropTypes from 'prop-types'
import TasklistItem from './TasklistItem'

Tasklist.propTypes = {
  tasksData: PropTypes.array.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  handleTaskStatusChange: PropTypes.func.isRequired,
  handleTaskDescriptionChange: PropTypes.func.isRequired,
  handleTaskRemove: PropTypes.func.isRequired,
}

function Tasklist({
  tasksData,
  isEditMode,
  handleTaskStatusChange,
  handleTaskDescriptionChange,
  handleTaskRemove,
}) {
  const listTasksInProgress = tasksData.filter((item) => item.isDone === false)
  const listTasksDone = tasksData.filter((item) => item.isDone)

  const listTasksInProgressRendered =
    listTasksInProgress.length > 0 ? (
      listTasksInProgress.map((item) => (
        <TasklistItem
          key={item.id}
          id={item.id}
          description={item.description}
          isDone={item.isDone}
          isEditMode={isEditMode}
          handleTaskStatusChange={handleTaskStatusChange}
          handleTaskDescriptionChange={handleTaskDescriptionChange}
          handleTaskRemove={handleTaskRemove}
        />
      ))
    ) : (
      <p>No tasks to display or everything is done...</p>
    )
  const listTasksDoneRendered =
    listTasksDone.length > 0 &&
    listTasksDone.map((item) => (
      <TasklistItem
        key={item.id}
        id={item.id}
        description={item.description}
        isDone={item.isDone}
        isEditMode={isEditMode}
        handleTaskStatusChange={handleTaskStatusChange}
        handleTaskDescriptionChange={handleTaskDescriptionChange}
        handleTaskRemove={handleTaskRemove}
      />
    ))

  return (
    <div className="tasklist__list__container">
      <ul className="tasklist__list">{listTasksInProgressRendered}</ul>
      {listTasksDoneRendered.length > 0 && (
        <>
          <h4 className="tasklist__list-header">Done: </h4>
          <ul className="tasklist__list">{listTasksDoneRendered}</ul>
        </>
      )}
    </div>
  )
}

export default Tasklist
