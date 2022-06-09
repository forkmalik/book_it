import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import style from "./InfoBlock.module.scss";

const InfoBlock = (props) => {
    return (
        <div className={style.info}>
            <div>
                <FontAwesomeIcon  className={style.type__icon} icon={regular('building')} />
                <span className={style.type__text}>{props.camp}</span>
            </div>
        </div>
    );
}

export default InfoBlock;