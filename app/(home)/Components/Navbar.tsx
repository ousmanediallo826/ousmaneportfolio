import { Icon } from 'lucide-react';
import  Link  from 'next/link';
import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";


const Navbar = () => {
    const socials = [
        {
            link: "https://www.linkedin.com/in/ousmane-diallo-005ab7246/",
            label: "linkedIn",
            Icon: FaLinkedin
        }, 
        {
            link: "https://github.com/ousmanediallo826",
            label: "Github",
            Icon: BsGithub 
        }

    ]
  return (
    <nav className='py-5 flex justify-between items-center'>


     <h1 className='text-2xl  font-bold underline underline-offset-8 decoration-blue-500  -rotate-3 '  >
        Ousmane 🧑🏽‍💻

     </h1>
     <div className=' flex gap-5 items-center'>
      
        {socials.map((social, index) => {
              const Icon = social.Icon
            return <Link href={social.link} key={index} aria-label={social.label}>
                <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
            </Link>
        })}
     </div>
    </nav>
  )
}

export default Navbar
