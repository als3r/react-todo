import PropTypes from 'prop-types'
import TodoListItem from './TodoListItem'

TodoList.propTypes = {
  todoData: PropTypes.array.isRequired,
  todoEditMode: PropTypes.bool.isRequired,
  handleTodoStatusChange: PropTypes.func.isRequired,
  handleTodoDescriptionChange: PropTypes.func.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired,
}

function TodoList({
  todoData,
  todoEditMode,
  handleTodoStatusChange,
  handleTodoDescriptionChange,
  handleRemoveTodo,
}) {
  const listTodosInProgress = todoData.filter((item) => item.status === false)
  const listTodosDone = todoData.filter((item) => item.status)

  const listTodosInProgressRendered =
    listTodosInProgress.length > 0 ? (
      listTodosInProgress.map((item) => (
        <TodoListItem
          key={item.id}
          id={item.id}
          description={item.description}
          status={item.status}
          todoEditMode={todoEditMode}
          handleTodoStatusChange={handleTodoStatusChange}
          handleTodoDescriptionChange={handleTodoDescriptionChange}
          handleRemoveTodo={handleRemoveTodo}
        />
      ))
    ) : (
      <p>No tasks to display or everything is done...</p>
    )
  const listTodosDoneRendered =
    listTodosDone.length > 0 &&
    listTodosDone.map((item) => (
      <TodoListItem
        key={item.id}
        id={item.id}
        description={item.description}
        status={item.status}
        todoEditMode={todoEditMode}
        handleTodoStatusChange={handleTodoStatusChange}
        handleTodoDescriptionChange={handleTodoDescriptionChange}
        handleRemoveTodo={handleRemoveTodo}
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

export default TodoList
