import React from "react";
import style from "./Card.module.scss";
import InfoBlock from "./InfoBlock/InfoBlock";

const Card = (props) => {

    return (
        <div className={style.type}>
            <div className={style.type__img}>
                <img src={props.img} alt="" />
            </div>

            <h3 className={style.type__title}>{props.title}</h3>
            <InfoBlock time={props.time} cardType={props.cardType}/>
            <button className={style.type__selectButton}>Select</button>
        </div>
    );
};

export default Card;
