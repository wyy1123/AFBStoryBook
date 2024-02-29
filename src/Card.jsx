import PropTypes from 'prop-types'

function Card(props){

    return(

        <div className="card"  onClick={() => window.open(props.link, '_blank')}  > 
            <img className="card-image" src = {props.imgSrc} alt="card"></img> 
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text"> {props.text}</p>
        </div>
    );
}
 
Card.propTypes = {
    link:PropTypes.string,
    imgSrc:PropTypes.string,
    title:PropTypes.string,
    text:PropTypes.string,
}

export default Card;