import Link from 'next/link'
import React from 'react'

const TopbarMenu = () => {
  return (
    <ul className='flex gap-2.5'>
        <li><Link href="/" className='font-semibold text-white text-xs'>IQAC</Link></li>
        <li><Link href="/" className='font-semibold text-white text-xs'>NAAC</Link></li>
        <li><Link href="/" className='font-semibold text-white text-xs'>Alumni</Link></li>
        <li><Link href="/" className='font-semibold text-white text-xs'>LMS</Link></li>
        <li><Link href="/" className='font-semibold text-white text-xs'>ERP</Link></li>
        <li><Link href="/" className='font-semibold text-white text-xs'>Blogs</Link></li>
        <li><Link href="/" className='font-semibold text-white text-xs'>Library</Link></li>
        <li><Link href="/" className='font-semibold text-white text-xs'>CIF</Link></li>
        <li><Link href="/" className='font-semibold text-white text-xs'>Contact Us</Link></li>
    </ul>
  )
}

export default TopbarMenu