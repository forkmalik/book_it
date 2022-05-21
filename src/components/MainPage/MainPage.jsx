import React from "react";
import InfoPage from "./InfoPage/InfoPage";
import style from "./MainPage.module.scss";
import TypePage from "./TypePage/TypePage";
import {connect} from "react-redux";

const MainPage = (props) => {

    return (
        <div className={style.wrapper} >
            {props.display.display === "info" && <InfoPage />}
            {props.display.display === "type" && <TypePage />}
            {/*<InfoPage />*/}
            {/*<TypePage />*/}
        </div>
    );

 }

    function mapStateToProps (state) {
        return {
            display: state.display
        }
    }

export default connect(mapStateToProps)(MainPage)
