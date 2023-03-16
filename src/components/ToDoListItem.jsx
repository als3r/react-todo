import PropTypes from 'prop-types'

ToDoListItem.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  status: PropTypes.bool,
  toDoEditMode: PropTypes.bool,
  handleToDoStatusChange: PropTypes.func,
  handleToDoDescriptionChange: PropTypes.func,
  handleRemoveToDo: PropTypes.func,
}

function ToDoListItem({
  id,
  description,
  status,
  toDoEditMode,
  handleToDoStatusChange,
  handleToDoDescriptionChange,
  handleRemoveToDo,
}) {
  return (
    <li key={`todo-list-item-${id}`} className="todolist__item">
      <input
        type="checkbox"
        className="todolist__checkbox"
        id={`todo-list-item-${id}`}
        data-id={id}
        defaultChecked={status}
        onChange={handleToDoStatusChange}
      />
      {toDoEditMode && (
        <>
          <input
            type="text"
            className={`todolist__item-input ${
              status ? 'todolist__item-input--done' : ''
            }`}
            data-id={id}
            defaultValue={description}
            onChange={handleToDoDescriptionChange}
          />
          <button
            type="button"
            className="todolist__button-remove"
            data-id={id}
            onClick={handleRemoveToDo}
          >
            X
          </button>
        </>
      )}

      {!toDoEditMode && (
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

export default ToDoListItem
