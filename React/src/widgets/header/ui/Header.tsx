import { Link } from 'react-router-dom'
import userProfilePic from "@/shared/images/user_profile1.png"
import MenuIcon from "./MenuIcon"
import { CustomNavlink } from '@/shared/ui/CustomNavlink'
import { navBarList } from '../model/constant'
import { useState } from 'react'



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="text-gray-50 Gilroy-normal bg-[#302964] rounded-xl border border-[#474175] px-4 xl:px-6 py-4">
      <div className="flex justify-between items-center">
        <nav className="hidden lg:block">
          <ul className="flex gap-0 xl:gap-8 n">
            {navBarList.map((list) => (
              <li key={list.name} className='text-nowrap'>
                <CustomNavlink to={list.src} label={list.name} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex w-full justify-end gap-5">
          <Link to="/" className="flex-shrink-0">
            <img
              src={userProfilePic}
              alt="User"
              className="w-12 h-12 object-cover rounded-full"
            />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="lg:hidden mt-4">
          <ul className="flex flex-col gap-4">
            {navBarList.map((list) => (
              <li key={list.name}>
                <CustomNavlink
                  to={list.src}
                  label={list.name}
                  onClick={() => setIsOpen(false)}
                />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>

  );
}
