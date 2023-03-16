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
  const listItemsRedered =
    toDoData.length > 0 ? (
      toDoData.map((item) => (
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
      <li>Nothing to do</li>
    )

  return <ul className="todolist__list">{listItemsRedered}</ul>
}

export default ToDoList
