
import Card from './Card'


import ch1Img from './assets/ch1Img.jpg'
import ch2Img from './assets/ch2Img.jpg'
import ch3Img from './assets/ch3Img.jpg'

function App() {

  return (
    <>
    <h1> Choose A Chapter</h1>
    <Card link = {'https://www.afreebird.org/game/'} imgSrc={ch1Img} title= {'Chapter1'} text={'Begin the Journey with Alice'}/>
    <Card link = {'https://secure.givelively.org/donate/a-free-bird-corporation'} imgSrc={ch2Img} title= {'Chapter2'} text={'Alice enters the magical hallway'}/>
    <Card link = {'https://www.google.com/'} imgSrc={ch3Img} title= {'Chapter3'} text={'Alice in the Wonderland'}/> 

    </>

  )
}

export default App
