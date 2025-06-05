import { Link } from 'react-router-dom'
import userProfilePic from "@/shared/images/user_profile1.png"
import MenuIcon from "./MenuIcon"
import { CustomNavlink } from '@/shared/ui/CustomNavlink'
import { navBarList } from '../model/constant'



export default function Header() {
  return (

    <header className='text-gray-50 Gilroy-normal bg-[#302964] rounded-xl border border-[#474175] px-6 py-4 flex justify-between '>
      <nav>
        <ul className='flex gap-8 '>
          {navBarList.map(list => (
            <li key={list.name}>
              <CustomNavlink to={list.src} label={list.name} />
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-6 justify-center items-center">

        <Link to="/" className="">
          <img
            src={userProfilePic}
            alt="User-Profile-Picture"
            className="w-12 h-12  object-cover rounded-full"
          />
        </Link>
        <button className="cursor-pointer max-w-10">
          {<MenuIcon />}
        </button>
      </div>
    </header >
  )
}
