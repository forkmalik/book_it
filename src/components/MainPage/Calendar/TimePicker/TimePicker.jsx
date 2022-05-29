import React from 'react';
import style from './TimePicker.module.scss';
import TimeCard from "./TimeCard/TimeCard";
import {getBaseInfo, getBookingInfo} from "../../../../redux/data";



const TimePicker = (props) => {

    //console.log(bookingTime);

    const timeList = props.bookingTime.map((elem, index) => <TimeCard key={index}
                                                                startTime={elem.startTime} endTime={elem.endTime}
                                                                    displayPage={props.handlers.displayConfirmHandler}/>)

    return (
        <div className={style.container}>
            {timeList}
        </div>
    )

}

export default TimePicker;