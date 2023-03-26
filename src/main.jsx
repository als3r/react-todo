/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import Tasklists from './routes/tasklist/index'
import Tasklist from './routes/tasklist/view'
import TasklistEdit from './routes/tasklist/edit'
import ErrorPage from './pages/ErrorPage'
// import './css/index.css'
// import './css/App.css'
import './css/main.css'
import './css/header.css'
import './css/footer.css'
import './css/form.css'
import './css/login.css'
import './css/tasklist.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
  },
  {
    path: '/tasklist',
    element: <Tasklists />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Tasklists /> },
          {
            path: '/tasklist/:tasklistId',
            element: <Tasklist />,
            // loader: contactLoader,
            // action: contactAction,
          },
          {
            path: '/tasklist/:tasklistId/edit',
            element: <TasklistEdit />,
            // loader: contactLoader,
            // action: editAction,
          },
          {
            path: '/tasklist/:tasklistId/destroy',
            // action: destroyAction,
            // errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
  {
    path: '/tasklists',
    element: <Tasklists />,
    errorElement: <ErrorPage />,
    // loader: contactLoader,
    // action: contactAction,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
