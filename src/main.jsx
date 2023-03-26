/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Tasklists from './routes/tasklists'
import Tasklist from './routes/tasklist'
import TasklistEdit from './routes/tasklistEdit'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        // errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: 'tasklists',
            element: <Tasklist />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: 'tasklist/:tasklistId',
            element: <Tasklist />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: 'tasklist/:tasklistId/edit',
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: 'tasklist/:tasklistId/destroy',
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
