import ButtonBack from '../components/ButtonBack'
import backgroundImage from '../assets/images/skybg.jpg';

import SinglePageOfProject from '../components/SinglePageOfProject';

import { 
  imageWeatherAppFirst,
  imageWeatherAppSecound,
  imageWeatherAppThird,
} from '../assets/images/index'


    const WeatherApp = () => {

      console.log(data.target);

      const data = {
        name: 'WeatherApp',
        about: 'Simple application to check weather wherver you want',
        text: 'Simple application to check weather wherver you want. It was developed using JavaScript and CSS for data use free api',
        imgF: imageWeatherAppFirst,
        imgS: imageWeatherAppSecound,
        imgT: imageWeatherAppThird,
        link: 'https://buczekb.github.io/weatherApp-useApi/',
        target: '_blank'
      }

      return (
        <>
        <SinglePageOfProject 
        name={data.name}
        about={data.about}
        text={data.text}
        imgF={data.imgF}
        imgS={data.imgS}
        imgT={data.imgT}
        link={data.link}
        target={data.target}
        />
        </>
      )
    }
  

export default WeatherApp