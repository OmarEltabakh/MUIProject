
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './Component/Layout/Layout';
import Home from "./Component/Home/Home";
import SideBar from "./Component/SideBar/SideBar";
import Create from "./Component/Create/Create";
import DarkModeContextProvider from "./Context/DarkModeContext";
import NotFound from './Component/NotFound/NotFound';
import Setting from './Component/Setting/Setting';
import Profile from './Component/Profile/Profile';


export default function App() {


  const routers = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "SideBar", element: <SideBar /> },
        { path: "Create", element: <Create /> },
        { path: "Setting", element: <Setting /> },
        { path: "Profile", element: <Profile /> },
        { path: "*", element: <NotFound /> },
      ]
    }
  ])



  return <>
    <DarkModeContextProvider>
      <RouterProvider router={routers} />
    </DarkModeContextProvider>

  </>
}
