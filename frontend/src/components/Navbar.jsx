import React from 'react'
// import logo from "https://cdn.cssauthor.com/wp-content/uploads/2021/12/Best-Online-Code-Editors.png?strip=all&lossy=1&ssl=1"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const logo ="https://tse3.mm.bing.net/th?id=OIP.kX2XOYVkZ0MtIv41AWTAUwHaHa&pid=Api&P=0&h=220"
  return (
    <>
      <div className="nav flex px-[100px] items-center justify-between h-[150px] bg-[#0f0e0e]">
        <img src={logo} className='w-[70px] object-cover' alt="" />

        <div className="links flex items-center gap-[15px]">
          <Link className=' transition-all hover:text-blue-500'>Home</Link>
          <Link className=' transition-all hover:text-blue-500'>About</Link>
          <Link className=' transition-all hover:text-blue-500'>Services</Link>
          <Link className=' transition-all hover:text-blue-500'>Contact</Link>
          <button onClick={()=>{
            localStorage.removeItem("token");
            localStorage.removeItem("isLoggedIn");
            window.location.reload();
          }} className="btnNormal bg-red-500 transition-all hover:bg-red-600 px-[20px]">Logout</button>
        </div>
      </div>
    </>
  )
}

export default Navbar