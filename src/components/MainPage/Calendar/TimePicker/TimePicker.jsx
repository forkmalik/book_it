import React from 'react';
import style from './TimePicker.module.scss';
import TimeCard from "./TimeCard/TimeCard";

const bookingTime = [
    {
        startTime: "8:00",
        endTime: "9:20"
    },
    {
        startTime: "9:20",
        endTime: "10:40"
    },
    {
        startTime: "10:40",
        endTime: "12:00"
    },
    {
        startTime: "12:00",
        endTime: "13:20"
    },
    {
        startTime: "13:20",
        endTime: "14:40"
    },
    {
        startTime: "14:40",
        endTime: "16:00"
    },
    {
        startTime: "16:00",
        endTime: "17:20"
    },
    {
        startTime: "17:20",
        endTime: "18:40"
    },
    {
        startTime: "18:40",
        endTime: "20:00"
    }
];

const TimePicker = () => {
    const timeList = bookingTime.map(elem => <TimeCard startTime={elem.startTime} endTime={elem.endTime} />)

    return (
        <div className={style.container}>
            {timeList}
        </div>
    )

}

export default TimePicker;