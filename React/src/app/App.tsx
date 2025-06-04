import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "@/pages/signup";
import { Login } from "@/pages/login";


function App() {
  const routesDefination = createRoutesFromElements(
    <Route>
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
