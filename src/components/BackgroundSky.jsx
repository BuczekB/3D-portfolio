import {Canvas} from '@react-three/fiber'
import Sky from '../models/Sky'


function BackgroundSky({ contentHeight })  {
  console.log(window.innerHeight);
  console.log(contentHeight);

  let heightOfWindow = contentHeight + 200

  if(contentHeight < window.innerHeight){
    heightOfWindow = window.innerHeight
  }

  console.log(heightOfWindow);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      {/* Użyj odpowiednich klas Tailwind CSS do stylizacji */}
      <div style={{ height: heightOfWindow }} className="w-full bg-transparent">
        <Canvas className="w-full h-full" camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
          <Sky isRotating={true} />
        </Canvas>
      </div>
    </div>
  )
}

export default BackgroundSky