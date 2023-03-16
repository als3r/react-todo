import ToDoListItem from './ToDoListItem'

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
