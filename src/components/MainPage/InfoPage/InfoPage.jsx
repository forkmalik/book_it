import React from "react";
import Calendar from "./Calendar/Calendar";
import Contacts from "./Contacts/Contacts";
import style from "./InfoPage.module.scss";

const InfoPage = () => {
    return (
        <div className={style.main}>
            <Calendar />
            <Contacts />
        </div>
    );
};

export default InfoPage;
