import ButtonBack from '../components/ButtonBack'
import backgroundImage from '../assets/images/skybg.jpg';

import SinglePageOfProject from '../components/SinglePageOfProject';

import { 
  imageDealerAppFirst,
  imageDealerAppSecound,
  imageDealerAppThird,
} from '../assets/images/index'


    const DealerApp = () => {

      const data = {
        name: 'Dealer App',
        about: 'Aplication to traning new dealers',
        text: 'Created this app for new dealers to training them. With this app they can level up with skill faster and easier. It was developed using React and CSS.Tested correct working of app with unit tests',
        imgF: imageDealerAppFirst,
        imgS: imageDealerAppSecound,
        imgT: imageDealerAppThird,
        link: 'https://buczekb.github.io/dealer-app/',
        target: '_blank',
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
  

export default DealerApp