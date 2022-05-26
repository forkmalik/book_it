import React from 'react';
import style from './TimeCard.module.scss'

const TimeCard = (props) => {
    return (
        <div className={style.card}>
            {props.startTime} - {props.endTime}
        </div>
    );
}

export default TimeCard;