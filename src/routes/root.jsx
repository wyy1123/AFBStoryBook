
import Card from '../Card'


import ch1Img from '../assets/ch1Img.jpg'


function Root() {

  return (
    <>
    <h1> Choose A Story to Play</h1>
    <Card link = {'/App'} imgSrc={ch1Img} title= {'Alice in the Wonderland'} text={'Travel through the wonderland with Alice'}/>
  
    </>

  )
}

export default Root
