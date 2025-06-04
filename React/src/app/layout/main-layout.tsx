import { Outlet } from "react-router-dom"

export function MainLayout() {

  return (
    <>
      <div className="bg-[#191153] min-h-[100vh] flex gap-5 p-4 pb-20">

        <main className={`w-full `}>
          {<Outlet />}
        </main>
      </div>
    </>
  )
}