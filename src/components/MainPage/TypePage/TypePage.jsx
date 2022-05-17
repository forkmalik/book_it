import React from "react";
import UnderlinedText from "../UnderlinedText/UnderlinedText";
import style from "./TypePage.module.scss";
import Card from "../Card/Card";
import lecImg from "../../../assets/lec.png";
import pracImg from "../../../assets/prac.png";

const TypePage = () => {
    return (
        <div>
            <UnderlinedText name="types" />
            <div className={style.types}>
                <Card title="Lecture class" time="1:20 h" img={lecImg} type="lecture" />
                <Card title="Practice class" time="1:20 h" img={pracImg} type="practice" />
            </div>
        </div>
    );
};

export default TypePage;
