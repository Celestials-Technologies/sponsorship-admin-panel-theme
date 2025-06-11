import { Outlet, useLocation } from "react-router-dom"
import Header from "@/widgets/header/ui/Header"
import Sidebar from "@/widgets/sidebar/ui/Sidebar"
import { useEffect, useState } from "react"

export function MainLayout() {
  const currentpath = useLocation()
  console.log("currentpath:", currentpath)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (currentpath.pathname.startsWith("/login") ||
      currentpath.pathname.startsWith("/signUp") ||
      currentpath.pathname.startsWith("/forget")) {
      setIsVisible(false)
    }
  }, [currentpath.pathname])

  return (
    <>
      <div className="bg-[#191153] min-h-[100vh] flex gap-5 p-4 pb-20">
        {isVisible && <Sidebar />}
        <main className={`w-full  ${isVisible ? "lg:w-4/5" : undefined}`}>
          {isVisible && <Header />}
          {<Outlet />}
        </main>
      </div>
    </>
  )
}