import ButtonBack from '../components/ButtonBack'
import backgroundImage from '../assets/images/skybg.jpg';

import SinglePageOfProject from '../components/SinglePageOfProject';

import { 
  imageFakeShopFirst,
  imageFakeShopSecound,
  imageFakeShopThird,
} from '../assets/images/index'

const data = {
  name: 'FakeShop',
  about: 'Project simulate ecommers website',
  text: 'FakeShop is my project when i simulate problems and solutions like we meet in normal comercial ecommers website. To build frontend version I use React and SCSS, to build backend NodeJS but backend is simple app to communicate with DataBase. Most of the application is frontend',
  imgF: imageFakeShopFirst,
  imgS: imageFakeShopSecound,
  imgT: imageFakeShopThird,
  link: '/3D-portfolio/projects/FakeShop/DisabledWeb',
  target: '_self'
}

const FakeShop = () => {
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

export default FakeShop