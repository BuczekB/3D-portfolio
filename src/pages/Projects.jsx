import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


import ButtonBack from '../components/ButtonBack'
import BackgroundSky from '../components/BackgroundSky'
import SingleProject from '../components/SingleProject'

import  {
  avatarBJ,
  avatarBTC,
  avatarDealer,
  avatarFakeShop,
  avatarWeather,
  avatarWebsite
} from '../assets/images/index'

import { Link } from 'react-router-dom'

const Projects = () => {

  const projectListRef = useRef(null);

 

  const arrayOfProjects = [
    {name: 'DealerApp',
     text: 'Aplication to traning new dealers',
     image: avatarDealer  
  },
    {name: 'FakeShop',
    text: 'Project simulate ecommers website',
    image: avatarFakeShop 
  },
    {name: 'CryptoApp',
    text: 'Everything about crypto',
    image: avatarBTC 
  },
    {name: 'WeatherApp',
    text: 'Information about weather',
    image:  avatarWeather  
  },
    {name: 'BJGame',
    text: 'Just BlackJack game',
    image: avatarBJ  
  },
    {name: 'Website',
    text: 'Simple Website fro small company',
    image: avatarWebsite 
  },
]

const listOfProjects = arrayOfProjects.map((item) =>{
  return(
      <Link key={item.name} to={item.name}>
      <SingleProject avatar={item.image} nameOfProject={item.name} text={item.text}/>
      </Link>
  )
})


useEffect(() => {
  gsap.from(projectListRef.current.children, {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3, 
    ease: 'power3.out', 
  });
}, [arrayOfProjects]);

  return (
    <section  className=" w-full h-screen ">
       <div className='w-screen h-screen bg-transparent flex flex-col justify-center items-center absolute top-0 left-0 z-10'>
      <ButtonBack></ButtonBack>
      <h1 className='text-3xl md:text-6xl font-bold mb-8 custom-shadow'>  Programming Projects</h1>
      <div
      className='mx-auto w-2/3 grid grid-cols-2 gap-4'
      ref={projectListRef}
      >
        {listOfProjects}
      </div>
       </div>
      <BackgroundSky/>
    </section>
  )
}

export default Projects