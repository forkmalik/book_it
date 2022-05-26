import './App.css';
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import {useDispatch} from "react-redux";
import {
    displayCalendar,
    displayClasses,
    displayConfirm,
    displayType,
    selectLecture,
    selectPractice
} from "./redux/actions";


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

    const displayCalendarHandler = () => {
        dispatch(displayCalendar());
    }

    const displayConfirmHandler = () => {
        dispatch(displayConfirm());
    }

    const mainPageHandlers = {
        displayClassHandler,
        selectLectureHandler,
        selectPracticeHandler,
        displayCalendarHandler,
        displayConfirmHandler
    }

    return (
        <div className="app">
            <Header displayType={displayTypeHandler}/>
            <MainPage handlers={mainPageHandlers}/>
        </div>

    );
}

export default App;
