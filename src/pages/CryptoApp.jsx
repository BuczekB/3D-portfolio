import ButtonBack from '../components/ButtonBack'
import backgroundImage from '../assets/images/skybg.jpg';

import SinglePageOfProject from '../components/SinglePageOfProject';

import { 
  imageCryptoFirst,
  imageCryptoSecound,
  imageCryptoThird,
} from '../assets/images/index'


    const CryptoApp = () => {

      const data = {
        name: 'CryptoApp',
        about: 'Infrmation about every crypto coins',
        text: 'I have created an application that allows you to check information about every cryptocurrency. It was developed using React, TypeScript, Redux, and Material UI.',
        imgF: imageCryptoFirst,
        imgS: imageCryptoSecound,
        imgT: imageCryptoThird,
        link: 'https://buczekb.github.io/crypto-app/'
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
  

export default CryptoApp