import PropTypes from 'prop-types'
import TasklistItem from './TasklistItem'

Tasklist.propTypes = {
  tasklistData: PropTypes.array.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  handleTaskStatusChange: PropTypes.func.isRequired,
  handleTaskDescriptionChange: PropTypes.func.isRequired,
  handleTaskRemove: PropTypes.func.isRequired,
}

function Tasklist({
  tasklistData,
  isEditMode,
  handleTaskStatusChange,
  handleTaskDescriptionChange,
  handleTaskRemove,
}) {
  const listTasksInProgress = tasklistData.filter(
    (item) => item.isDone === false,
  )
  const listTasksDone = tasklistData.filter((item) => item.isDone)

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
    <>
      <ul className="tasklist__list">{listTasksInProgressRendered}</ul>
      {listTasksDoneRendered.length > 0 && (
        <>
          <h4 className="tasklist__list-header">Done: </h4>
          <ul className="tasklist__list">{listTasksDoneRendered}</ul>
        </>
      )}
    </>
  )
}

export default Tasklist
