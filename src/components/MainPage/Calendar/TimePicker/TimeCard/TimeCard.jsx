import React from 'react';
import style from './TimeCard.module.scss'
import {setBookingInfo} from "../../../../../redux/data";

const TimeCard = (props) => {
    return (
        <div className={style.card} onClick={() => {
            setBookingInfo('startTime', props.startTime);
            setBookingInfo('endTime', props.endTime);
        }}>
            {props.startTime} - {props.endTime}
        </div>
    );
}

export default TimeCard;