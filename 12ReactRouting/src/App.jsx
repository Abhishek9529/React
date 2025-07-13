import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import ParamComp from './components/ParamComp'
import Courses from './components/Courses'
import Test from './components/Test'
import Notes from './components/Notes'
import NotFound from './components/NotFound'

function App() {

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path: '/about',
      element: <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path: '/dashboard',
      element: <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:[
        {
          path:'courses',
          element: <Courses/>
        },
        {
          path:'test',
          element: <Test/>
        },
        {
          path:'notes',
          element: <Notes/>
        },
      ]
      
    },
    {
      path: '/student/:id',
      element: <div>
        <Navbar/>
        <ParamComp/>
      </div>
    },
    {
      path: '*',
      element: <NotFound/>
    }
  ]
)

  return (
    <>
   <div><RouterProvider router={router}/></div>
    </>
  )
}

export default App
