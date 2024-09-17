import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {

  const currentUser = false;

  const Layout = () => { //Vista principal

    return(
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    )
  }

  //Para proteger páginas
  const protectedRoute = ({children}) =>{
    if(currentUser) {
      return <Navigate to="/"/>
    }
    return children;
  };
  
  //Aquí se puede enrutar dependiendo de la ruta(path) que pongamos
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        }
      ]
    },
    {
    path: "/login",
    element: <Login />,
    
  },
  {
    path: "/register",
    element: <Register />,
  }

]);

  return (
    <div className="App">
      
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
