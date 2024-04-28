import ButtonBack from '../components/ButtonBack'
import backgroundImage from '../assets/images/skybg.jpg';

import SinglePageOfProject from '../components/SinglePageOfProject';

import { 
    imageBJFirst,
    imageBJSecound,
    imageBJThird,
} from '../assets/images/index'


    const BJGame = () => {

      const data = {
        name: 'BlackJack',
        about: 'Casino card game',
        text: 'I have created a game application called BlackJack. It is a simple card game where the objective is to reach a total of 21 without exceeding it. You play against a dealer. To develop this app, I used React and a Card API.',
        imgF: imageBJFirst,
        imgS: imageBJSecound,
        imgT: imageBJThird,
        link: 'https://buczekb.github.io/game-bj/'
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
  

export default BJGame