import backgroundImage from '../assets/images/skybg.jpg';
import ButtonBack from '../components/ButtonBack'

const DisabledWeb =  () =>  {
  return (
    <section className="w-full h-auto relative 	" >
      
        <ButtonBack />
    <div className="bg-cover bg-center min-h-screen relative" style={{backgroundImage: `url(${backgroundImage})`}}>
    <div className="w-full h-screen bg-transparent flex justify-center items-center 	"   >
       
        <h1 className="text-2xl xl:text-5xl font-bold  mb-2 xl:mb-8 xl:mt-8 custom-shadow "> Website available only on localhost</h1>
    </div>
    </div>
    </section>
  )
}

export default DisabledWeb