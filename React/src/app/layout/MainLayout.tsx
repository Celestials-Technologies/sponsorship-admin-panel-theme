import { Outlet, useLocation } from "react-router-dom"
import Header from "@/widgets/header/ui/Header"
import Sidebar from "@/widgets/sidebar/ui/Sidebar"
import { useEffect, useState } from "react"

export function MainLayout() {
  const currentpath = useLocation()
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)

  useEffect(() => {
    if (currentpath.pathname.startsWith("/login") ||
      currentpath.pathname.startsWith("/signup") ||
      currentpath.pathname.startsWith("/forget")
    ) {
      setIsHeaderVisible(false)
      setIsSidebarVisible(false)

    } else {
      setIsHeaderVisible(true)
      setIsSidebarVisible(true)

    }
  }, [currentpath.pathname, isHeaderVisible, isSidebarVisible])

  return (
    <>
      <div className={`bg-[#191153] min-h-[100vh] flex gap-5 p-4 pb-20`}>
        {isSidebarVisible && <Sidebar />}
        <main className={`w-full  ${isSidebarVisible ? "lg:w-4/5" : undefined}`}>
          {isHeaderVisible && <Header />}
          {<Outlet />}
        </main>
      </div>
    </>
  )
}