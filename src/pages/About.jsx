
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

import { NavLink } from 'react-router-dom'

import {Canvas} from '@react-three/fiber'

import Sky from '../models/Sky'

import ButtonBack from '../components/ButtonBack'
import BackgroundSky from '../components/BackgroundSky'

function About() {
  

  const [isRotating, setIsRotating] = useState(true)

  const [contentHeight, setContentHeight] = useState(0);

  const projectListRef = useRef(null);

  const projectHightRef = useRef(null);

 


  useEffect(() => {

    if (projectHightRef.current) {
      setContentHeight(projectHightRef.current.clientHeight);
    }


    gsap.from(projectListRef.current.children, {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.4, 
      ease: 'power3.out', 
    });
  }, []);

  return (
    <section className="w-full h-auto relative 	" >
      <div className="w-full h-auto bg-transparent flex justify-center items-center absolute top-0 left-0 z-10 	"   >
        <ButtonBack />
        <div className="w-5/6 xl:w-4/6 h-auto flex 	pt-10" ref={projectHightRef}  >
          <div className="flex flex-col justify-center text-base xl:text-xl text-center font-medium 	" ref={projectListRef}  >
            <h1 className="text-2xl xl:text-5xl font-bold  mb-2 xl:mb-8 xl:mt-8  ">About Jakub Buczynski</h1>
            <p>
              Hi, my name is Jakub and I'm searching for my first job as a programmer. My coding journey began a
              few years ago when I started learning languages like C++ and Python. However, most of my time has
              been devoted to frontend languages like JavaScript.
            </p>
            <p>
              Now, I want to start working as a programmer because it provides me with the opportunity to learn
              much faster than I can on my own.
            </p>
            <p>
              On my portfolio, you can find a few of my projects in the Applications or Projects section. I am
              continuously working on new ones.
            </p>
            <div className="contactStackBox">
              <h2 className="text-2xl xl:text-2xl font-bold mt-2 mb-2">Contact</h2>
              <div>
                <ul className="text-base xl:text-xl">
                  <li>E-MAIL: BUCZYNSKIJAKUB10@GMAIL.COM</li>
                  <li>PHONE NUMBER: +48 735 157 016</li>
                  <li>GITHUB: HTTPS://GITHUB.COM/BUCZEKB</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-2xl xl:text-2xl font-bold mt-8 mb-6">Tech Stack</h2>
              <div className="techListBox flex justify-center items-center">
                <ul className="text-base xl:text-xl mr-8">
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>GIT</li>
                  <li>Unit test</li>
                </ul>
                <ul className="text-base xl:text-xl mr-8">
                  <li>API</li>
                  <li>RWD</li>
                  <li>SASS</li>
                  <li>React Router</li>
                  <li>Redux</li>
                  <li>Material UI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <BackgroundSky contentHeight={contentHeight} />
    </section>
  )
}

export default About