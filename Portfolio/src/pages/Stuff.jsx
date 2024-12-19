import React from 'react'
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import reat from '../assets/images/react.png';
import javascript from '../assets/images/javascript.png';
import github from '../assets/images/github.png';
import git1 from '../assets/images/git.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Stuff = () => {
    useGSAP(()=>{
        
        const tl = gsap.timeline()
        tl.from('.stuff', {
            scrollTrigger:{
                trigger: '.stuff_parent',
                start: "-100%",
                end: "top",
                scrub: true,
            },
            x: 1000,
        })
        tl.from('.heading', {
            scrollTrigger:{
                trigger: '.stuff_parent',
                start: "-100%",
                end: "top",
                scrub: true,
            },
            x: -1000,
            
        })
        tl.from('.about', {
            scrollTrigger:{
                trigger: '.stuff_parent',
                start: "-40%",
                end: "top",
                scrub: true,
            },
            y: 200,
            opacity: 0,
        })
        tl.from('.card1', {
            scrollTrigger:{
                trigger: '.stuff_parent',
                start: "-30%",
                end: "top",
                scrub: true,
            },
            x: -200,
            duration: 1,
            opacity: 0,
        })
        tl.from('.card2', {
            scrollTrigger:{
                trigger: '.stuff_parent',
                start: "-30%",
                end: "top",
                scrub: true,
            },
            x: 200,
            duration: 1,
            opacity: 0,
        })
        tl.from('.rd', {
            scrollTrigger:{
                trigger: '.stuff_parent',
                start: "-20%",
                end: "top",
                scrub: true,
            },
            y: 100,
            opacity: 0,
        })
    })
  return (
    <div id="About" className='stuff_parent w-full h-screen bg-white'>
        <div className='flex justify-center items-center h-32 bg-black overflow-hidden'>
            <h1 className='stuff text-center text-7xl text-white'>STUFFS I KNOW</h1>
        </div>
        
        <div className='flex justify-center items-center flex-col h-4/6 gap-20 p-2'>
            <h1 className='heading text-4xl border-b-2 border-black'>About Me</h1>
            <h3 className='about w-6/12'>I am a dedicated Front-End Developer with expertise in HTML, CSS, JavaScript, and React. I specialize in transforming designs into fully functional, responsive, and user-friendly web interfaces. My focus is on writing clean, efficient, and maintainable code to create seamless and accessible web experiences across all devices.</h3>
            <div className='flex justify-center items-center cards w-full sm:gap-5 md:gap-20'>
                <div className='card1 card w-[460px] h-72 rounded-lg overflow-auto border-2 border-black'>
                    <div className='absolute flex justify-center items-center w-full h-16 border-b-2 border-black'>
                        <h1 className='text-3xl'>Technologies</h1>
                    </div>
                    <div className='flex flex-wrap justify-center items-center h-full'>
                        <img className="rd" src={html} width={80} alt="" />
                        <img className="rd" src={css} width={80} alt="" />
                        <img className="rd" src={javascript} width={80} alt="" />
                        <img className="rd" src={reat} width={80} alt="" />
                    </div>
                </div>
                <div className='card2 card w-[460px] h-72 rounded-lg overflow-auto border-2 border-black relative'>
                    <div className='absolute flex justify-center items-center w-full h-16 border-b-2 border-black'>
                        <h1 className='text-3xl'>Others</h1>
                    </div>
                    <div className='flex flex-wrap justify-center items-center h-full'>
                        <img className="rd" src={github} width={80} alt="" />
                        <img className="rd" src={git1} width={80} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stuff