import PropTypes from 'prop-types'

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  todoEditMode: PropTypes.bool.isRequired,
  handleTodoStatusChange: PropTypes.func.isRequired,
  handleTodoDescriptionChange: PropTypes.func.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired,
}

function TodoListItem({
  id,
  description,
  status,
  todoEditMode,
  handleTodoStatusChange,
  handleTodoDescriptionChange,
  handleRemoveTodo,
}) {
  return (
    <li key={`todo-list-item-${id}`} className="todolist__item">
      <input
        type="checkbox"
        className="todolist__checkbox"
        id={`todo-list-item-${id}`}
        data-id={id}
        defaultChecked={status}
        onChange={handleTodoStatusChange}
      />
      {todoEditMode && (
        <>
          <input
            type="text"
            className={`todolist__item-input ${
              status ? 'todolist__item-input--done' : ''
            }`}
            data-id={id}
            defaultValue={description}
            onChange={handleTodoDescriptionChange}
          />
          <button
            type="button"
            className="todolist__button-remove"
            data-id={id}
            onClick={handleRemoveTodo}
          >
            X
          </button>
        </>
      )}

      {!todoEditMode && (
        <label
          htmlFor={`todo-list-item-${id}`}
          className={`todolist__label ${status ? 'todolist__label--done' : ''}`}
        >
          {description}
        </label>
      )}
    </li>
  )
}

export default TodoListItem
