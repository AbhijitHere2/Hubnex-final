import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Login from "./components/Login/SignIn";
import Register from "./components/Register/Register";
import Pricing from "./components/Pricing/Pricing";
import Marketing from "./components/Domainpages/Marketing";
import AIML from "./components/Domainpages/AIML";
import HR from "./components/Domainpages/HR";
import UIUX from "./components/Domainpages/UIUX/index";
import Frontend from "./components/Domainpages/Frontend/index";
import Fullstack from "./components/Domainpages/Fullstack/index";
import DataScience from "./components/Domainpages/DataScience";
import Finance from "./components/Domainpages/Finance/Finance";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./Scrollbar/ScrollTop";
import Certificate_footer from "./components/Certificate/Certificate_footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Home />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <NavBar />
          <About />
        </>
      ),
    },
    {
      path: "/Blog",
      element: (
        <>
          <NavBar />
          <Blog />
        </>
      ),
    },

    {
      path: "/Services",
      element: (
        <>
          <NavBar />
          <Services />
        </>
      ),
    },
    {
      path: "/Pricing",
      element: (
        <>
          <NavBar />
          <Pricing />
        </>
      ),
    },

    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
    {
      path: "/Marketing",
      element: (
        <>
          <ScrollToTop />
          <NavBar />
          <Marketing />
          <Footer />
        </>
      ),
    },
    {
      path: "/AIML",
      element: (
        <>
          <ScrollToTop />
          <NavBar />
          <AIML />
          <Footer />
        </>
      ),
    },
    {
      path: "/HR",
      element: (
        <>
          <ScrollToTop />
          <NavBar />
          <HR />
          <Footer />
        </>
      ),
    },
    {
      path: "/Finance",
      element: (
        <>
          <ScrollToTop />
          <NavBar />
          <Finance />
          <Footer />
        </>
      ),
    },

    {
      path: "/DataScience",
      element: (
        <>
          <ScrollToTop />
          <NavBar />
          <DataScience />
          <Footer />
        </>
      ),
    },

    {
      path: "/Frontend",
      element: (
        <>
          <ScrollToTop />
          <NavBar />
          <Frontend />
          <Footer />
        </>
      ),
    },
    {
      path: "/Fullstack",
      element: (
        <>
          <ScrollToTop />
          <NavBar />
          <Fullstack />
          <Footer />
        </>
      ),
    },
    {
      path: "/UIUX",
      element: (
        <>
          <ScrollToTop />
          <NavBar />
          <UIUX />
          <Footer />
        </>
      ),
    },
    {
      path: "/certificate_footer",
      element: (
        <>
          <ScrollToTop />
          <NavBar />
          <Certificate_footer />
        </>
      ),
    },
  ]);

  return (
    <>
      <div className="">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
