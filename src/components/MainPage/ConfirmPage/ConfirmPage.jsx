import React from 'react';
import style from './ConfirmPage.module.scss';
import classnames from "classnames";
import InputFields from "./InputFields/InputFields";
import BookingData from "./BookingData/BookingData";

const ConfirmPage = (props) => {
    return (
        <div className={style.confirm}>
            <InputFields />
            <BookingData />
        </div>
    );
}

export default ConfirmPage;