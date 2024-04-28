import { NavLink  } from 'react-router-dom'


function ButtonBack() {

  
  
  return (
    <NavLink to='/' className='w-12 h-12  rounded-lg bg-white items-center justify-center flex font-bold shadow-md fixed top-5 left-5 z-20'>
            <p className='blue-gradient_text'>Back</p>
        </NavLink>
  )
}

export default ButtonBack