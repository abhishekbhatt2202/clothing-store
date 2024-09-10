import React from 'react'
import { CircleUserRound, FacebookIcon, InstagramIcon } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';


function Header() {
  return (
    <>
    <div className='text-center bg-[#7DB0AD] py-3 text-white'>
    FREE SHIPPING WORLDWIDE
    </div>
 <div className='flex p-2 items-center justify-between'>
  <div className='flex'>
    <Link className='py-3 px-2' to={"/"}>SHOP</Link>
    <Link className='py-3 px-2' to={"/"}>ABOUT</Link>
    <Link className='py-3 px-2' to={"/"}>FAQ</Link>
    <Link className='py-3 px-2' to={"/"}>CONTACT</Link>
  </div>
  <div className='flex items-center'>
    <Link to={"/"}
    className='tracking-[0.5rem] text-3xl font-bold text-[#7DB0AD]'
    >JUD .</Link>
  </div>
  <div className='flex p-2 items-center '>
    <span className='flex px-2 '>
    <CircleUserRound className='mx-2'/> Log in
    </span>
    <FacebookIcon className='mx-3'/>
    <InstagramIcon/>
    <span className='flex items-center px-4 '>
    <ShoppingCart /> <span className='bg-black text-white px-2 rounded-[20px] mx-1'>0</span>
    </span>
  </div>
 </div>
    </>
  )
}

export default Header