import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';
const router = createBrowserRouter(
  [
 {
   path: "/",
   element:
   <div>
    <Navbar/>
     <Home/>
   </div>
  },
 {
   path: "/pastes",
   element:
   <div>
    <Navbar/>
     <Paste/>
   </div>
  },
 {
   path: "/pastes/:id",
   element:
   <div>
     <Navbar/>
     <ViewPaste/>
   </div>
  },
  ]
 
);

function App() {

  return (
    <>
      <div className="w-full h-screen mx-auto flex flex-col">
      <RouterProvider router={router}/>
      </div>  

    </>
  )
}

export default App
