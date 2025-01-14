import './Button_circle.css'

function Button_circle(props){

    return(
        <button className={props.type} >
           <img className={props.side} src={props.svg}></img>
        </button>
    )
}

export default Button_circle