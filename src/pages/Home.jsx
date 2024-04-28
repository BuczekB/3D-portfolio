import {Canvas, useThree, useFrame, extend} from '@react-three/fiber'

import { useState, Suspense, useRef, useEffect } from 'react'

import soundoff from '../assets/icons/soundoff.png'
import soundon from '../assets/icons/soundon.png'

import gsap from 'gsap'
import Loader from '../components/Loader'

import Island from '../models/Island'
import Sky from '../models/Sky'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'


import Navbar from '../components/Navbar'

import sakura from '../assets/sakura.mp3'

extend({OrbitControls})

const Home = () => {

  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.4
  audioRef.current.loop = true

  const [islandP, setIslandP] = useState(null)
  const [test1, settest1] = useState(false)
  const [navItem, setNavItem] = useState('codee')
  const [isPlayingMusic, setIsPlayingMusic] = useState(true)
 
  const islandTestRef = useRef(null);

 useEffect(() =>{
  if(isPlayingMusic){
    audioRef.current.play()
  }

  return () =>{
    audioRef.current.pause()
  }
 },[isPlayingMusic])
  
  const Controls = ({navItem}) => {
    const { camera, gl } = useThree();
    const controlsRef = useRef(null);


    const handleWindowClick = () => {

      console.log('Position:', camera.position.x, camera.position.y, camera.position.z);
     
    };

    //window.addEventListener('click', handleWindowClick);


    
    

    useEffect( () => {
     const islandPositionVector = new THREE.Vector3(...islandPosition);
     controlsRef.current.target = new THREE.Vector3
     (5.917308148036672,
      -0.9774701724883729,
      -13.942643045169257
      )
       controlsRef.current.autoRotateSpeed = 1
     controlsRef.current.minDistance = 6
     controlsRef.current.maxDistance = 20
     controlsRef.current.autoRotate = true;
     camera.lookAt(0, 0, 0)
     controlsRef.current.update();



  
    
   lookAtPoint(navItem)
 
      
     
    }, [islandTestRef, navItem]);



  
    

  
    useFrame(() => {
      
      controlsRef.current.update();
    });


    const lookAtPoint = (name) =>{

     let pointOfCamera = {
      x: 0,
      y: 0,
      z: 0
     }
      
     

       switch(name){
        case 'Code':
          pointOfCamera = { ...pointOfCamera, x: 5.64, y: 2.30, z: -8.94 };
          break;
        case 'About':
          pointOfCamera = { ...pointOfCamera, x: 6.19, y: 2.35, z: -18.52 };
          break;
        case 'Project':
          pointOfCamera = { ...pointOfCamera, x: 3.94, y: 2.00, z: -9.36 };
          break;    
       }
     
       
       gsap.to(camera.position,{
        x: pointOfCamera.x,
        y: pointOfCamera.y,
        z: pointOfCamera.z,
        duration: 1.5
       })
      

    }

  

    return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
  };


 


  const [isRotating, setIsRotating] = useState(false)
  const [currentState, setCurrentStage] = useState(1)

  const addjustIslandForScreenSieze = () =>{
    let screenScale = null;
    let screenPosition = [-1, -4.5, -13]
    let rotation = [0.1, 4.7, 0]


    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9]
    }else{
      screenScale = [1,1,1]
    }
    return [screenScale, screenPosition, rotation]
  }

  const [islandScale, islandPosition, islandRotation] = addjustIslandForScreenSieze()



  const navigateCamera = (pointName) =>{
    setNavItem(pointName)    
}



  return (
    <section  className="w-full h-screen relative">
      <Navbar
      navigateCamera={navigateCamera}
      />
    
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
      >
        
        <Suspense fallback={<Loader/>}>

      
        <directionalLight position={[1,1,1]} intensity={2}/>
        <ambientLight intensity={0.5} />
        <hemisphereLight skyColor = '#b1e1ff' groundColor='#000000' intensity={1} />

       <Sky 
       isRotating={isRotating}
       />
       <Island
       ref={islandTestRef}
       //setIslandP = {setIslandP}
       position = {islandPosition}
       scale = {islandScale}
       rotation = {islandRotation}
       isRotating ={isRotating}
       setIsRotating = {setIsRotating}
       setCurrentStage={setCurrentStage}
       />
        </Suspense>
        <Controls
        navItem={navItem}
        />
      </Canvas>
      <div className='absolute bottom-2 left-2'>
      <img 
        src={!isPlayingMusic? soundoff : soundon}
        alt='sound'
        className='w-10 h-10 cursor-pointer object-contain'
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home



