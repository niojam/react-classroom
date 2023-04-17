import './Button.css';


function Button ({text, onBtnClicked}) {

    return (<button onClick={onBtnClicked}>{text}</button>)
}


export default Button;