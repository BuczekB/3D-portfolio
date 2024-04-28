import React from 'react'




const SingleProject = ({avatar, nameOfProject, text}) =>{
  return (
    <div className=' grid grid-cols-3 gap-4 bg-white bg-opacity-25 backdrop-blur-md p-4 '>
                    <div className='mr-10 col-span-1 hidden lg:block '>
                        <div ><img className="w-28 h-28 rounded-lg " src={avatar}></img></div>
                    </div>
                   <div className=' flex flex-col justify-center md:text-xl col-span-2 w-28 h-28 md:w-auto md:h-auto'>
                   <h2 className='font-bold '>{nameOfProject}</h2> 
                    <h3 className="hidden lg:block">{text}</h3>
                   </div>
                </div>
  )
}

export default SingleProject 