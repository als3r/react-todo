import PropTypes from 'prop-types'
import ToDoListItem from './ToDoListItem'

ToDoList.propTypes = {
  toDoData: PropTypes.array,
  handleToDoStatusChange: PropTypes.func,
  handleToDoDescriptionChange: PropTypes.func,
  handleRemoveToDo: PropTypes.func,
}

function ToDoList({
  toDoData,
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
          handleToDoStatusChange={handleToDoStatusChange}
          handleToDoDescriptionChange={handleToDoDescriptionChange}
          handleRemoveToDo={handleRemoveToDo}
        />
      ))
    ) : (
      <li>Empty list</li>
    )

  return <ul className="todolist__list">{listItemsRedered}</ul>
}

export default ToDoList
