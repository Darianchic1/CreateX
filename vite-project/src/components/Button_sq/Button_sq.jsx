import './Button_sq.css'

function Button_sq(props){
    return(
        <button className={props.type}>
            <p className='button_txt'>{props.action}</p>
        </button>
    )
}

export default Button_sq