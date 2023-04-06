/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import TasklistRoute, { loader as tasklistLoader } from './routes/tasklist/view'
import TasklistsRoute from './routes/tasklist/index'
import NewTasklistRoute from './routes/tasklist/create'
import BoardRoute from './routes/board/index'

import ErrorPage from './pages/ErrorPage'
// import './css/index.css'
// import './css/App.css'
import './css/main.css'
import './css/header.css'
import './css/footer.css'
import './css/form.css'
import './css/login.css'
import './css/tasklist.css'
import './css/board.css'
import './css/mobile.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
  },
  {
    path: '/tasklist/:tasklistId',
    element: <TasklistRoute />,
    loader: tasklistLoader,
    // action: contactAction,
  },
  {
    path: '/tasklists',
    element: <TasklistsRoute />,
    errorElement: <ErrorPage />,
    // loader: contactLoader,
    // action: contactAction,
  },
  {
    path: '/board',
    element: <BoardRoute />,
    errorElement: <ErrorPage />,
    // loader: contactLoader,
    // action: contactAction,
  },
  {
    path: '/new-tasklist',
    element: <NewTasklistRoute />,
    errorElement: <ErrorPage />,
    // loader: contactLoader,
    // action: contactAction,
  },
  // {
  //   path: '/tasklist',
  //   element: <TasklistRoute />,
  //   errorElement: <ErrorPage />,
  //   loader: tasklistLoader,
  // children: [
  //   {
  //     errorElement: <ErrorPage />,
  //     children: [
  //       { index: true, element: <TasklistRoute /> },
  //       {
  //         path: '/tasklist/:tasklistId',
  //         element: <TasklistRoute />,
  //         loader: tasklistLoader,
  //         // action: contactAction,
  //       },
  //       {
  //         path: '/tasklist/:tasklistId/edit',
  //         element: <TasklistEdit />,
  //         // loader: contactLoader,
  //         // action: editAction,
  //       },
  //       {
  //         path: '/tasklist/:tasklistId/destroy',
  //         // action: destroyAction,
  //         // errorElement: <div>Oops! There was an error.</div>,
  //       },
  //     ],
  //   },
  // ],
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
