/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, {useState} from 'react'
import { usePathname } from 'next/navigation'
import {useEffect} from 'react'
import { NavLinks } from '@/constants'
import Link from 'next/link'
import Transition from './Transition'

const Navigation = () => {

    const [isRouting, setisRouting] = useState(false)
    const path = usePathname()
    const [prevPath, setPrevPath] = useState("/")


  useEffect(() => {

    if(prevPath!=path){
      setisRouting(true)
    }
  }, [path,prevPath])

  useEffect(() => {
    if(isRouting){
      setPrevPath(path);
      const timeout= setTimeout(() => {
        setisRouting(false)
      }, 1200)

      return () => clearTimeout(timeout)
    }
  }, [isRouting])

  return (
    <div 
      style={{left : "20%"}}
      className='absolute z-[50] bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center bg-black border-white'
      >
      
      {isRouting && <Transition/>}
      { NavLinks.map((nav) => (
          <Link 
          key={nav.name} 
          href={nav.link}
          className='mt-5 mb-5 pl-5 pr-5 min-w-[20%]'
          >
          <nav.icon className={`w-[25px] h-[25px] ${path === nav.name? "text-purple-800": "text-white"}`}/>
          </Link>
        )) }
    </div>
  )
}

export default Navigation