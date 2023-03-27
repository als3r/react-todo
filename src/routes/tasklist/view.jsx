import { useLoaderData } from 'react-router-dom'
import TasklistPage from '../../pages/TasklistPage'

export async function loader({ params }) {
  const { tasklistId } = params
  // console.log({ tasklistId }, 'test2')
  return { tasklistId }
}

function TasklistRoute() {
  // console.log(useLoaderData(), 'useLoaderData')
  let { tasklistId } = useLoaderData()
  tasklistId = parseInt(tasklistId, 10)
  return <TasklistPage tasklistId={tasklistId} />
}
export default TasklistRoute
