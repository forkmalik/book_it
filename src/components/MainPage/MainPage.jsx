import React from "react";
import InfoPage from "./InfoPage/InfoPage";
import style from "./MainPage.module.scss";
import TypePage from "./TypePage/TypePage";
import {connect} from "react-redux";
import Classes from "./Classes/Classes";
import Calendar from "./Calendar/Calendar";


const MainPage = (props) => {

    return (
        <div className={style.wrapper} >
            {/*{props.display.display === "info" && <InfoPage />}*/}
            {/*{props.display.display === "type" && <TypePage handlers={props.handlers}/>}*/}
            {/*{props.display.display === "class" && <Classes type={props.classType.classType}/>}*/}
            <Calendar />
            {/*<TypePage />*/}
        </div>
    );

 }

    function mapStateToProps (state) {
        return {
            display: state.display,
            classType: state.classType
        }
    }

export default connect(mapStateToProps)(MainPage)
