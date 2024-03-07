import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import HomePage from './components/pages/HomePage.jsx'
import { AuthLayout } from './components/index.js'

import HomePage from './components/pages/HomePage.jsx'
import LoginPage from './components/pages/LoginPage'
import SignPage from './components/pages/SignPage'
import AllPosts from './components/pages/AllPosts'
import AddPost from './components/pages/AddPost'
import EditPost from './components/pages/EditPost'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path:"/login",
        element: (
          <AuthLayout authentication={false}>
            <LoginPage/>
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element: (
            <AuthLayout authentication={false}>
                <SignPage />
            </AuthLayout>
        ),
    },
    {
        path: "/all-posts",
        element: (
            <AuthLayout authentication>
                {" "}
                <AllPosts />
            </AuthLayout>
        ),
    },
    {
        path: "/add-post",
        element: (
            <AuthLayout authentication>
                {" "}
                <AddPost />
            </AuthLayout>
        ),
    },
    {
        path: "/edit-post/:slug",
        element: (
            <AuthLayout authentication>
                {" "}
                <EditPost />
            </AuthLayout>
        ),
    },
    // {
    //     path: "/post/:slug",
    //     element: <Post />,
    // },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router}/>
    </Provider>
  </React.StrictMode>,
)
