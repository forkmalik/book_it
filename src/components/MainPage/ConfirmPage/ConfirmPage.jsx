import React from 'react';
import style from './ConfirmPage.module.scss';
import InputFields from "./InputFields/InputFields";
import BookingData from "./BookingData/BookingData";
import UnderlinedText from "../UnderlinedText/UnderlinedText";
import {getBookingInfo} from "../../../redux/data";

const ConfirmPage = (props) => {
    let bookingData = getBookingInfo();

    return (
        <div className={style.confirm}>
            <UnderlinedText name="confirmation"/>
            <div className={style.container}>
                <InputFields />
                <BookingData type={bookingData.type} date={bookingData.date}
                             startTime={bookingData.startTime} class={bookingData.class} displayPage={props.handlers.displayInfoHandler}/>
            </div>

        </div>
    );
}

export default ConfirmPage;