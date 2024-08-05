
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Pricing from './components/Pricing/Pricing'
import Hr from './components/Domain/Hr/Hr'


function App() {

  const router = createBrowserRouter([
  
    {
      path:"/",
      element:<><NavBar/><Home/></>
    },
    {
      path:"/About",
      element:<><NavBar/><About/></>
    },  {
      path:"/Blog",
      element:<><NavBar/><Blog/></>
    },
   
    {
      path:"/Services",
      element:<><NavBar/><Services/></>
    },
    {
      path:"/Pricing",
      element:<><NavBar/><Pricing/></>
    },
   
    {
      path:"/Login",
      element:<><NavBar/><Login/></>
    },
    {
      path:"/Register",
      element:<><NavBar/><Register/></>
    }
   
  ])

  return (
 
    <>
      <div>
        <RouterProvider  router={router}/>

        {/* <Hr/> */}
      
       
      </div>
    </>
  )
}

export default App
