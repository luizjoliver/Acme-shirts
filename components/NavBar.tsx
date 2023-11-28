import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../public/acmelogo.png"
export default function NavBar() {
  return (
    <nav className='w-full h-15 bg-slate-200 p-3'>
        <ul className='flex flex-row justify-between items-center'>
            <Link href="/"><Image src={logo} height="48" alt='acmeLogo'/></Link>
            <Link href="/products" className='hover:text-slate-600'>Products</Link>
        </ul>
    </nav>
  )
}
