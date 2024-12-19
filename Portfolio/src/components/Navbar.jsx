import React from 'react';
import gitimg from '../assets/images/github.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import {useGSAP} from '@gsap/react'
import {gsap} from 'gsap'
import { ReactLenis, useLenis} from 'lenis/react'
import Lenis from '@studio-freight/lenis';
const Navbar = () => {
  const navigators = document.querySelectorAll('.navigator')
  navigators.forEach(element => {
    let animation = gsap.to(element, {
      paused: true,
      rotation: -20,
      duration: .5
    })
    element.addEventListener('mouseenter', ()=> animation.play())
    element.addEventListener('mouseleave', ()=> animation.reverse())
  })

  useGSAP(()=>{
      const tl = gsap.timeline()
      tl.from('.brand', {
        y:-50,
        opacity: 0,
        duration: 1
      })
      tl.from('.navigator', {
        y: -50,
        opacity: 0,
        duration: .5,
        stagger:.2
      })
    })
  return (
    <div className='flex absolute justify-between items-center w-full h-16 px-4 golos border-b-2 max-w-[1920px]'>
      <a href="#" className='brand'><h1 className='text-black text-3xl font-bold cursor-pointer '>Portfolio.</h1></a>
      <ul className='hidden md:flex gap-5 justify-around items-center'>
        <li className='navigator py-2 px-4 rounded-md text-black text-lg'><a href="#About">Home</a></li>
        <li className='navigator py-2 px-4 rounded-md text-black text-lg'><a href="">About</a></li>
        <li className='navigator py-2 px-4 rounded-md text-black text-lg'><a href="">Work</a></li>
        <li className='navigator py-2 px-4 rounded-md text-black text-lg'><a href="">Contact</a></li>
      </ul>
      <ul className='hidden md:flex items-center gap-5 text-white text-xl '>
        <li className='navigator text-black flex justify-center items-center hover:text-[#0866FF] hover:bg-white rounded-full p-1 hover:mb-2'><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
        <li className='navigator text-black flex justify-center items-center hover:text-[#0866FF] hover:bg-white rounded-full p-1 hover:mb-2'><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li className='navigator text-black flex justify-center items-center hover:text-black hover:bg-white rounded-full p-1 hover:mb-2'><a href=""><FontAwesomeIcon icon={faGithub} /></a></li>
      </ul>
      <button className='md:hidden bg-white text-2xl py-1 px-3 rounded-md text-black'><FontAwesomeIcon icon={faBars} /></button>
    </div>
  )
}

export default Navbar