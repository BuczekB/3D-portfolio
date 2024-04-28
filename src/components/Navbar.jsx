
import { NavLink } from 'react-router-dom';


import '../index.css'

const Navbar = ({navigateCamera}) => {

 

const navigateTest = (event) => {
  navigateCamera(event.target.innerHTML)
}

  return (
    
    <header className='header'>
        <NavLink className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md cursor-grab'>
            <p className='blue-gradient_text'>JB</p>
        </NavLink>
       <nav className='flex text-lg gap-7 font-medium '>
            <NavLink 
            className='custom-shadow '
             onClick={navigateTest}>
                About
            </NavLink>
            <NavLink
            className='custom-shadow ' 
             onClick={navigateTest}>
                Project
            </NavLink>
            <NavLink 
           className='custom-shadow '
            onClick={navigateTest}>
                Code
            </NavLink>
       </nav>
    </header>
   
  )
}

export default Navbar


//className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}