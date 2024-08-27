
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
import Marketing from './components/Domainpages/Marketing'
import AIML from './components/Domainpages/AIML'
import HR from './components/Domainpages/HR'
import UIUX from './components/Domainpages/UIUX/index'
import Frontend from './components/Domainpages/Frontend/index'
import Fullstack from './components/Domainpages/Fullstack/index'
import DataScience from './components/Domainpages/DataScience/DataHome'
import Finance from './components/Domainpages/Finance/Finance'




function App() {

  const router = createBrowserRouter([
  
    {
      path:"/",
      element:<><NavBar/><Home /></>
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
    ,
    {
      path:"/Marketing",
      element:<><NavBar/><Marketing/></>
    }
    ,
    {
      path:"/AIML",
      element:<><NavBar/><AIML/></>
    },
    {
      path:"/HR",
      element:<><NavBar/><HR/></>
    },
    {
      path:"/Finance",
      element:<><NavBar/><Finance/></>
    },
    {
      path:"/DataScience",
      element:<><NavBar/><DataScience/></>
    }
    ,
    {
      path:"/Frontend",
      element:<><NavBar/><Frontend/></>
    }
    ,
    {
      path:"/Fullstack",
      element:<><NavBar/><Fullstack/></>
    },
    {
      path:"/UIUX",
      element:<><NavBar/><UIUX/></>
    }
  ])

  return (
 
    <>
      <div className= "">
        <RouterProvider   router={router}/>

  
        
       
      </div>
    </>
  )
}

export default App
