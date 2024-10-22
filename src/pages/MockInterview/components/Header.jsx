import { UserButton } from '@clerk/clerk-react'

import { Link } from 'react-router-dom'
// import { usePathname } from 'next/navigation'
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react'

function Header() {

    // const path=usePathname();
    const location = useLocation();
    const path = location.pathname;

    useEffect(()=>{
        console.log(path)
    },[])

    
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <img src={'/logo.svg'} width={160} height={100} alt='logo' />
        <ul className='hidden md:flex gap-6'>
          <Link to={"/mockinterview"}>
            <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path=='/mockinterview'&&'text-primary font-bold'}
            `}
            
            >Dashboard</li>
            </Link>
            
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
            ${path=='/mockinterview/questions'&&'text-primary font-bold'}
            `}>Questions</li>
              <Link to={"/mockinterview/upgrade"}>
            <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path=='/mockinterview/upgrade'&&'text-primary font-bold'}
            `}>Upgrade</li>
            </Link>
            <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path=='/mockinterview/how'&&'text-primary font-bold'}
            `}>How it Works?</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header