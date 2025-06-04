import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "@/pages/signup";
import { Login } from "@/pages/login";
import { MainLayout } from "./layout/main-layout";



function App() {
  const routesDefination = createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login />} />
    </Route>
  )
  const routes = createBrowserRouter(routesDefination)

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
