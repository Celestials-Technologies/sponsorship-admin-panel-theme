import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "@/pages/signup";
import { Login } from "@/pages/login";
import { MainLayout } from "./layout/main-layout";
import { LoginDetail } from "@/pages/login-detail/ui/LoginDetail";
import { DashboardHome } from "@/pages/dashboard-home/ui/DashboardHome";




function App() {
  const routesDefination = createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<DashboardHome />} />
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login />} />
      <Route path='loginDetail' element={<LoginDetail />} />

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
