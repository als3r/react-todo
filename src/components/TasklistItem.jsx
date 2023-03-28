import PropTypes from 'prop-types'

TasklistItem.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  handleTaskStatusChange: PropTypes.func.isRequired,
  handleTaskDescriptionChange: PropTypes.func.isRequired,
  handleTaskRemove: PropTypes.func.isRequired,
}

function TasklistItem({
  id,
  description,
  isDone,
  isEditMode,
  handleTaskStatusChange,
  handleTaskDescriptionChange,
  handleTaskRemove,
}) {
  return (
    <li key={`task-list-item-${id}`} className="tasklist__item">
      <input
        type="checkbox"
        className="tasklist__checkbox"
        id={`task-list-item-${id}`}
        data-id={id}
        defaultChecked={isDone}
        onChange={handleTaskStatusChange}
      />
      {isEditMode && (
        <>
          <input
            type="text"
            className={`tasklist__item-input ${
              isDone ? 'tasklist__item-input--done' : ''
            }`}
            data-id={id}
            defaultValue={description}
            onChange={handleTaskDescriptionChange}
          />
          <button
            type="button"
            className="tasklist__button-remove"
            data-id={id}
            onClick={handleTaskRemove}
          >
            X
          </button>
        </>
      )}

      {!isEditMode && (
        <label
          htmlFor={`task-list-item-${id}`}
          className={`tasklist__label ${isDone ? 'tasklist__label--done' : ''}`}
        >
          {`#${id} | ${description}`}
        </label>
      )}
    </li>
  )
}

export default TasklistItem
