import {Html} from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
         <div className="flex justify-center items-center">
        <div className="w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin"></div>

        </div>
    </Html>
  )
}

export default Loader

