import PropTypes from 'prop-types'
import ToDoListItem from './ToDoListItem'

ToDoList.propTypes = {
  toDoData: PropTypes.array.isRequired,
  toDoEditMode: PropTypes.bool.isRequired,
  handleToDoStatusChange: PropTypes.func.isRequired,
  handleToDoDescriptionChange: PropTypes.func.isRequired,
  handleRemoveToDo: PropTypes.func.isRequired,
}

function ToDoList({
  toDoData,
  toDoEditMode,
  handleToDoStatusChange,
  handleToDoDescriptionChange,
  handleRemoveToDo,
}) {
  const listTodosInProgress = toDoData.filter((item) => item.status === false)
  const listTodosDone = toDoData.filter((item) => item.status)

  const listTodosInProgressRendered =
    listTodosInProgress.length > 0 ? (
      listTodosInProgress.map((item) => (
        <ToDoListItem
          key={item.id}
          id={item.id}
          description={item.description}
          status={item.status}
          toDoEditMode={toDoEditMode}
          handleToDoStatusChange={handleToDoStatusChange}
          handleToDoDescriptionChange={handleToDoDescriptionChange}
          handleRemoveToDo={handleRemoveToDo}
        />
      ))
    ) : (
      <p>No tasks to display</p>
    )
  const listTodosDoneRendered =
    listTodosDone.length > 0 &&
    listTodosDone.map((item) => (
      <ToDoListItem
        key={item.id}
        id={item.id}
        description={item.description}
        status={item.status}
        toDoEditMode={toDoEditMode}
        handleToDoStatusChange={handleToDoStatusChange}
        handleToDoDescriptionChange={handleToDoDescriptionChange}
        handleRemoveToDo={handleRemoveToDo}
      />
    ))

  return (
    <>
      <ul className="todolist__list">{listTodosInProgressRendered}</ul>
      {listTodosDoneRendered.length > 0 && (
        <>
          <h4 className="todolist__list-header">Done: </h4>
          <ul className="todolist__list">{listTodosDoneRendered}</ul>
        </>
      )}
    </>
  )
}

export default ToDoList
