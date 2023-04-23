import './Button.css';


function CounterButton ({baseText, onBtnClicked, count}) {

    return (<button onClick={onBtnClicked}>{baseText} + {count}</button>)
}


export default CounterButton;