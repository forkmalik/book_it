import React from "react";
import style from './BokingData.module.scss';
import classnames from "classnames";

const BookingData = () => {
    return (
        <div className={style.data}>
            <span className={style.confirm__type}>Practice</span>
            <div className={style.date}>
                <span className={classnames(style.confirm__date, style.data_item)}>Date:</span>
                <span className={style.date_value}>01.02.13</span>
            </div>
            <div className={style.time}>
                <span className={classnames(style.confirm__time, style.data_item)}>Starts at:</span>
                <span className={style.time_value}>11:25</span>
            </div>
            <div className={style.number}>
                <span className={classnames(style.confirm__number, style.data_item)}>Number:</span>
                <span className={style.number_value}>241</span>
            </div>
            <button className={style.confirm__btn}>Confirm booking</button>
        </div>
    );
}

export default BookingData;