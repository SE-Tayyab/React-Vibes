import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Provider } from 'react-redux'
import Store from './Store.jsx'
import Cart from './pages/Cart.jsx'
import Home from './pages/Home.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='cart' element={<Cart/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
)
