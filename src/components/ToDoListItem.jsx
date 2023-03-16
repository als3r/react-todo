import PropTypes from 'prop-types'

ToDoListItem.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  status: PropTypes.bool,
  handleToDoStatusChange: PropTypes.func,
  handleToDoDescriptionChange: PropTypes.func,
  handleRemoveToDo: PropTypes.func,
}

function ToDoListItem({
  id,
  description,
  status,
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
      {/* <label htmlFor={"todo-list-item-" + id } className="todolist__label">
                {description}
            </label> */}
      <input
        type="text"
        className="todolist__item-input"
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
    </li>
  )
}

export default ToDoListItem
