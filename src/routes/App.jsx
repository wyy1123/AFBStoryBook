
import Card from '../Card'


import ch1Img from '../assets/ch1Img.jpg'
import ch2Img from '../assets/ch2Img.jpg'
import ch3Img from '../assets/ch3Img.jpg'

function App() {

  return (
    <>
    <h1> Choose A Chapter</h1>
    <Card link = {'/App/Chapter1'} imgSrc={ch1Img} title= {'Chapter1'} text={'Begin the Journey with Alice'}/>
    <Card link = {'/App/Chapter2'} imgSrc={ch2Img} title= {'Chapter2'} text={'Alice enters the magical hallway'}/>
    <Card link = {'/App/Chapter3'} imgSrc={ch3Img} title= {'Chapter3'} text={'Alice in the Wonderland'}/> 

    </>

  )
}

export default App
