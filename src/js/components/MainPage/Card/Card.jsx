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
            {props.cardType != "campus" && <InfoBlock time={props.time} camp={props.camp} />}
            <button className={style.type__selectButton}
                    onClick={() => {
                        props.displayPage();
                        if(props.hasOwnProperty('selectType')) {
                            props.selectType();
                        }
                        if(props.hasOwnProperty('setType')) {
                            props.setType('type', props.type);
                        }
                        if(props.hasOwnProperty('setCamp')) {
                            props.setCamp('camp', props.title);
                        }
                        if(props.hasOwnProperty('setClass')) {
                            props.setClass('class', props.title);
                        }
                    }}>Select</button>
        </div>
    );
};

export default Card;
