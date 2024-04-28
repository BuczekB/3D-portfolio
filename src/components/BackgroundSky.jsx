import {Canvas} from '@react-three/fiber'
import Sky from '../models/Sky'

function BackgroundSky() {
  return (
    <Canvas className={`w-screen h-screen bg-transparent `}
    camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
    >
       <Sky 
       isRotating={true}
       />
      </Canvas>
  )
}

export default BackgroundSky