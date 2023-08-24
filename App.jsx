import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Root from './pages/Root'
import Products from './pages/Products'
import Cart from './pages/Cart'


const router=createBrowserRouter([
  {path:'', element: <Root/>, children:[
    {path: '/', element:<Products/>},
    {path:'/cart', element:<Cart/>}
  ]}
])

const App =() => {
return <RouterProvider router={router}/>
}

export default App
