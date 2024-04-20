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
  }, [isRouting, path])

  return (
<div className="absolute bottom-0 left-0 right-0 flex justify-center">
  <div className="ml-10 mr-10 z-50 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between border  items-center bg-white">
    {isRouting && <Transition />}
    {NavLinks.map((nav) => (
      <Link key={nav.name} href={nav.link} className="p-5 min-w-[20%]">
        <nav.icon
          className={`w-[25px] h-[25px] ${
            path === nav.name ? "text-blue-800" : "text-black"
          }`}
        />
      </Link>
    ))}
  </div>
</div>
  )
}

export default Navigation