import React from "react";
import style from './BokingData.module.scss';
import classnames from "classnames";

const BookingData = (props) => {


    let date = props.date.getDay() + '.' + (props.date.getMonth() + 1) + '.' + props.date.getFullYear();
    return (
        <div className={style.data}>
            <span className={classnames(style.bold_text, style.header)}>Booking data</span>
            <div className={classnames(style.type, style.data_item)}>
                <span className={style.confirm__type}>Type:</span>
                <span className={classnames(style.type_value, style.bold_text)}>{props.type}</span>
            </div>
            <div className={classnames(style.date, style.data_item)}>
                <span className={style.confirm__date}>Date:</span>
                <span className={classnames(style.date_value, style.bold_text)}>{props.date.toLocaleDateString('en-GB')}</span>
            </div>
            <div className={classnames(style.time, style.data_item)}>
                <span className={style.confirm__time}>Starts at:</span>
                <span className={classnames(style.time_value, style.bold_text)}>{props.startTime}</span>
            </div>
            <div className={classnames(style.number, style.data_item)}>
                <span className={classnames(style.confirm__number, style.data_item)}>Number:</span>
                <span className={classnames(style.number_value, style.bold_text)}>{props.class}</span>
            </div>
            <button className={style.confirm__btn} onClick={props.displayPage}>Confirm booking</button>
        </div>
    );
}

export default BookingData;