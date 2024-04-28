import ButtonBack from '../components/ButtonBack'
import backgroundImage from '../assets/images/skybg.jpg';

import SinglePageOfProject from '../components/SinglePageOfProject';

import { 
  imageWebsiteFirst,
  imageWebsiteSecound,
  imageWebsiteThird,
} from '../assets/images/index'


    const Website = () => {

      const data = {
        name: 'Website',
        about: 'Landing page of small company',
        text: 'I have created a landing page for a small company in Lublin. It is a simple website that provides necessary information about the company. The development of this page was done using JavaScript and CSS.',
        imgF: imageWebsiteFirst,
        imgS: imageWebsiteSecound,
        imgT: imageWebsiteThird,
        link: 'https://buczekb.github.io/website-FRYZ/'
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
        />
        </>
      )
    }
  

export default Website