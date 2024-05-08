import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import ButtonBack from '../components/ButtonBack'
import backgroundImage from '../assets/images/skybg.jpg';



const SinglePageOfProject = ({name, about, text, imgF, imgS, imgT, link, target, test}) => {

  const projectListRef = useRef(null);


  console.log(link);

  useEffect(() => {
    gsap.from(projectListRef.current.children, {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.4, 
      ease: 'power3.out', 
    });
  }, []);

  return (
    <div className="bg-cover bg-center min-h-screen relative" style={{backgroundImage: `url(${backgroundImage})`}}>
      <ButtonBack/>
      <div className="absolute inset-0 backdrop-blur-sm bg-gray-200 bg-opacity-25"></div>
      <div  className="relative z-10 flex flex-col justify-center items-center custom-shadow ">
            <div ref={projectListRef} className='flex flex-col justify-center items-center mt-32'>
            <h1 className='text-6xl font-bold mb-8  ' >{name}</h1>
            <h2 className='text-3xl font-bold mb-8 text-center p-10' >{about}</h2>
            <div className='flex flex-col items-center'>
                <h2 className='text-4xl font-bold mb-8'>About</h2>
                <p className='text-lg font-bold w-2/3 text-center' >
                {text}
                </p>
            </div>
            <div >
            <a href={link} target={target} >
                <button className=' hover:scale-105 transition-transform items-center justify-center flex m-10 font-bold mb-24 h-10 w-48 backdrop-blur-sm bg-gray-200 bg-opacity-60 rounded-lg  shadow-lg shadow-gray-500/50'>
                   <span className='mr-10 ml-10 text-2xl'  >Go to</span>
                </button>
                </a>
            </div>
            <div className='flex flex-col items-center'>
                <img className='w-3/5 h-3/5 rounded-xl mb-10' src={imgF}></img>
                <img className='w-3/5 h-3/5 rounded-xl mb-10' src={imgS}></img>
                <img className='w-3/5 h-3/5  rounded-xl mb-10' src={imgT}></img>
            </div>
            </div>
      </div>
    </div>
  )
}

export default SinglePageOfProject