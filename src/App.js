import logo from './logo.svg';
import './App.css';
import Button from "./componets/button/Button";

function App() {


    const countPlusClicked = () => {
        console.log("Count + 1 clicked")
    }

    const countMinusClicked = () => {
        console.log("Count - 1  clicked")
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Button text="Count + 1" onBtnClicked={countPlusClicked}/>
                <Button text="Count - 1" onBtnClicked={countMinusClicked}/>
            </header>
        </div>
    );
}

export default App;
