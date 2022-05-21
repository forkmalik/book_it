import './App.css';
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import {useDispatch} from "react-redux";
import {displayType} from "./redux/actions";


function App() {
    const dispatch = useDispatch();

    const changeDisplayHandler = () => {
        dispatch(displayType());
    }

    return (
        <div className="app">
            <Header changeDisplay={changeDisplayHandler}/>
            <MainPage />
        </div>

    );
}

export default App;
