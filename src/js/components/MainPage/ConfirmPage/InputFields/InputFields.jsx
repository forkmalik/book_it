import React from "react";
import style from './InputFields.module.scss';
import classnames from "classnames";
import {setBookingInfo} from "../../../../redux/data";

const InputFields = () => {
    return (
        <div className={style.input_fields}>
            <div className={style.name}>
                <span className={classnames(style.confirm__name, style.fields)}>name:</span>
                <input type="text" className={classnames(style.name_field, style.input)}
                       onBlur={(e) => setBookingInfo('name', e.target.value)} placeholder="Petro Petrenko"/>
            </div>
            <div className={style.email}>
                <span className={classnames(style.confirm__name, style.fields)}>email:</span>
                <input type="text" className={classnames(style.email_field, style.input)}
                       onBlur={(e) => setBookingInfo('email', e.target.value)} placeholder="petrenko@gmail.com"/>
            </div>


        </div>
    );
}

export default InputFields;