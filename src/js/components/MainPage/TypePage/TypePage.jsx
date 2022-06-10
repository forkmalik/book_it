import React from "react";
import UnderlinedText from "../UnderlinedText/UnderlinedText";
import style from "./TypePage.module.scss";
import Card from "../Card/Card";
import lecImg from "../../../assets/lec.png";
import pracImg from "../../../assets/prac.png";
import {getBookingInfo, setBookingInfo} from "../../../redux/data";

const TypePage = (props) => {

    let bookingInfo = getBookingInfo();
    let campus = bookingInfo.camp;

    return (
        <div>
            <UnderlinedText name="types" />
            <div className={style.types}>
                <Card title="Lecture class" camp={campus} img={lecImg}
                      type="lecture" displayPage={props.handlers.displayClassHandler}
                        selectType={props.handlers.selectLectureHandler} setType={setBookingInfo}/>
                <Card title="Practice class" camp={campus} img={pracImg}
                      type="practice" displayPage={props.handlers.displayClassHandler}
                        selectType={props.handlers.selectPracticeHandler} setType={setBookingInfo}/>
            </div>
        </div>
    );
};

export default TypePage;
