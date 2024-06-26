/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: nimzu (https://sketchfab.com/nimzuk)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907
Title: Fox's islands
*/

import React, { useRef, useEffect, forwardRef } from "react";
import * as THREE from 'three';
import { useGLTF } from "@react-three/drei";
import { events, useFrame, useThree } from "@react-three/fiber";
import  {a} from '@react-spring/three'

import islandScene from '../assets/3d/island.glb'



import { useNavigate } from "react-router-dom";

const Island = forwardRef(({setIsIslandLoaded, isRotating, setIsRotating, setCurrentStage, ...props}, ref) => {

  const navigate = useNavigate();

  const { camera } = useThree();


  const IslandRef = useRef(null)

  


const {gl, viewport} = useThree()
const { nodes, materials } = useGLTF(islandScene);



const calculateCenter = () => {
  const box = new THREE.Box3().setFromObject(IslandRef.current);
  const center = new THREE.Vector3();
  box.getCenter(center);
  return center;
};


useEffect(() => {

  const center = calculateCenter();
  console.log('Koordynaty środka:', center.x, center.y, center.z);
  setIsIslandLoaded(true)

},[IslandRef])



const focusOnCode = (event) =>{

  console.log('works');
  

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  mouse.x = (event.offsetX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.offsetY / window.innerHeight) * 2 + 1;

  // Użyj raycastera do sprawdzenia, czy kliknięcie trafiło w mesha
  
  raycaster.setFromCamera(mouse, camera);

  // Pobierz listę obiektów przecinających się z raycasterem
  const intersects = raycaster.intersectObjects([meshRef.current]);


  console.log('Mesh clicked!');

}

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();


window.addEventListener('click', event =>{
  mouse.x = (event.offsetX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.offsetY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
 
  //const intersects = raycaster.intersectObjects([IslandRef.current], true);
  const intersects = IslandRef.current ? raycaster.intersectObjects([IslandRef.current], true) : [];
  
  if (intersects.length > 0){
    const nameOfLink = intersects[0].object.name
   if(nameOfLink.length > 0){
     
   if(intersects[0].object.name === 'code'){
    window.open('https://github.com/BuczekB', '_blank');
   }else{
    navigate(`${intersects[0].object.name}`)
   }
     
    
window.removeEventListener('click', event)
   
    }
  }
 
 
})




return (

  <a.group ref={ref} >
  <a.group ref={IslandRef} {...props} >
  <a.group rotation={[-Math.PI / 2, 0, 0]} scale={0.385}>
        <a.group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <a.group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              
              
              geometry={nodes.about.geometry}
              material={materials['Material.003']}
              position={[-1.351, 0.309, 0]}
            />
            <mesh
              
              
              geometry={nodes.figma.geometry}
              material={materials['Material.003']}
              position={[0, -0.098, 0]}
            />
            <mesh
              
              
              geometry={nodes.projects.geometry}
              material={materials['Material.003']}
              position={[0, 0.065, 0.572]}
            />
          </a.group>
        </a.group>
      </a.group>
      <a.group rotation={[-Math.PI / 2, 0, 0]} scale={0.385}>
        <a.group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <a.group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              
              
              geometry={nodes.stone_tile_medium_A005_scene_foliage_ground_0.geometry}
              material={materials['scene_foliage_ground.001']}
            />
            <mesh
              
              
              geometry={nodes.stone_tile_medium_A005_scene_foliage_ground_0001.geometry}
              material={materials['scene_foliage_ground.001']}
            />
            <mesh
              
              
              geometry={nodes.stone_tile_medium_A005_scene_foliage_ground_0002.geometry}
              material={materials['scene_foliage_ground.001']}
            />
            <mesh
              
              
              geometry={nodes.stone_tile_medium_A005_scene_foliage_ground_0003.geometry}
              material={materials['scene_foliage_ground.001']}
            />
            <mesh
              
              
              geometry={nodes.stone_tile_medium_A005_scene_foliage_ground_0004.geometry}
              material={materials['scene_foliage_ground.001']}
            />
            <mesh
              
              
              geometry={nodes.stone_tile_medium_A005_scene_foliage_ground_0005.geometry}
              material={materials['scene_foliage_ground.001']}
            />
            <mesh
              
              
              geometry={nodes.stone_tile_medium_A005_scene_foliage_ground_0006.geometry}
              material={materials['scene_foliage_ground.001']}
            />
          </a.group>
          <a.group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              
              
              geometry={nodes.stone_tile_medium_A007_scene_tree_canopy_0.geometry}
              material={materials['scene_tree_canopy.001']}
            />
            <mesh
              
              
              geometry={nodes.stone_tile_medium_A007_scene_tree_canopy_0001.geometry}
              material={materials['scene_tree_canopy.001']}
            />
            <mesh
              
              
              geometry={nodes.stone_tile_medium_A007_scene_tree_canopy_0002.geometry}
              material={materials['scene_tree_canopy.001']}
            />
          </a.group>
          <mesh
            
            
            geometry={nodes.stone_tile_medium_A001_scene_rocks_0.geometry}
            material={materials['scene_rocks.001']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            
            
            geometry={nodes.stone_tile_medium_A004_scene_tree_terrain_0.geometry}
            material={materials['scene_tree_terrain.001']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            
            
            geometry={nodes.stone_tile_medium_A006_scene_props_0.geometry}
            material={materials['scene_props.001']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            
            
            geometry={nodes.stone_tile_medium_A008_scene_stones_0.geometry}
            material={materials['scene_stones.001']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </a.group>
      </a.group>
      <mesh
        
        
        geometry={nodes.Text.geometry}
        material={materials['Material.003']}
        position={[-1.754, 5.73, -7.795]}
        rotation={[Math.PI / 2, 0, 1.676]}
      />
      <mesh
        
        
        geometry={nodes.Text001.geometry}
        material={materials['Material.004']}
        position={[-0.252, 5.638, -4.857]}
        rotation={[Math.PI / 2, 0, -2.025]}
      />
      <mesh
        
        
        geometry={nodes.Text002.geometry}
        material={materials['Material.005']}
        position={[-1.096, 6.139, -8.309]}
        rotation={[Math.PI / 2, 0, -0.908]}
      />
      <mesh
        
        
        geometry={nodes.Plane001.geometry}
        material={materials['Material.007']}
        position={[-0.596, 5.089, -5.362]}
        rotation={[Math.PI / 2, 0, -2.077]}
        scale={[1.29, 1, 1.1]}
        name={'code'}
      />
      <mesh
        
        
        geometry={nodes.Plane002.geometry}
        material={materials['Material.008']}
        position={[-0.464, 5.513, -9.223]}
        rotation={[Math.PI / 2, 0, -0.908]}
        scale={[1.35, 1, 1.39]}
        name={'projects'}
      />
      <mesh
        
        
        geometry={nodes.Plane003.geometry}
        material={materials['Material.009']}
        position={[-1.809, 5.372, -6.962]}
        rotation={[Math.PI / 2, 0, 1.592]}
        scale={[0.95, 1, 0.93]}
        name={'about'}
      />
</a.group>
</a.group>
);
})



export default Island
