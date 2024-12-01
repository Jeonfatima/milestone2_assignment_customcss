import React from 'react'
import Link from 'next/link';
const Navbar = () => {
  return (
    <div>
        <ul id='nav-list' >
            <li><Link href="/">Home</Link></li>  
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        

        </ul>
    </div>
  )
}

export default Navbar