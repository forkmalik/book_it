import React from "react";
import Schedule from "./Calendar/Schedule";
import Contacts from "./Contacts/Contacts";
import style from "./InfoPage.module.scss";

const InfoPage = () => {
    return (
        <div className={style.main}>
            <Schedule />
            <Contacts />
        </div>
    );
};

export default InfoPage;
