import React from "react";
import UnderlinedText from "../UnderlinedText/UnderlinedText";
import style from "./TypePage.module.scss";
import Card from "../Card/Card";
import lecImg from "../../../assets/lec.png";
import pracImg from "../../../assets/prac.png";

const TypePage = (props) => {
    return (
        <div>
            <UnderlinedText name="types" />
            <div className={style.types}>
                <Card title="Lecture class" camp="Central" img={lecImg}
                      type="lecture" displayPage={props.handlers.displayClassHandler}
                        selectType={props.handlers.selectLectureHandler}/>
                <Card title="Practice class" camp="Central" img={pracImg}
                      type="practice" displayPage={props.handlers.displayClassHandler}
                        selectType={props.handlers.selectPracticeHandler}/>
            </div>
        </div>
    );
};

export default TypePage;
