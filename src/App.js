import './App.css';
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import {useDispatch} from "react-redux";
import {displayType} from "./redux/actions";
import {createRef, useRef} from "react";


function App() {
    const dispatch = useDispatch();
    const childCompRef = useRef();

    const changeDisplayHandler = () => {
        dispatch(displayType());
        childCompRef.current.changeDisplay();
    }

    return (
        <div className="app">
            <Header changeDisplay={changeDisplayHandler}/>
            <MainPage ref={childCompRef}/>
        </div>

    );
}

export default App;
