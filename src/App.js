import './App.css';
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import {useDispatch} from "react-redux";
import {displayClasses, displayType, selectLecture, selectPractice} from "./redux/actions";


function App() {
    const dispatch = useDispatch();

    const displayTypeHandler = () => {
        dispatch(displayType());
    }

    const displayClassHandler = () => {
        dispatch(displayClasses());
    }

    const selectLectureHandler = () => {
        dispatch(selectLecture());
    }

    const selectPracticeHandler = () => {
        dispatch(selectPractice());
    }

    const mainPageHandlers = {
        displayClassHandler,
        selectLectureHandler,
        selectPracticeHandler
    }

    return (
        <div className="app">
            <Header displayType={displayTypeHandler}/>
            <MainPage handlers={mainPageHandlers}/>
        </div>

    );
}

export default App;
