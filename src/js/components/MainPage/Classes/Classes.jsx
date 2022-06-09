import React from "react";
import style from "./Classes.module.scss"
import {getClassData, setBookingInfo} from "../../../redux/data";
import Card from "../Card/Card";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import UnderlinedText from "../UnderlinedText/UnderlinedText";

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const Classes = (props) => {
    let classData = getClassData(props.type);
    const classList = classData.map((item) => <Card title={item.title} camp={item.camp} img={item.image}
                                                    type={item.type} cardType="classes" displayPage={props.handlers.displayCalendarHandler}
                                                    setClass={setBookingInfo} />)


    return (
        <div className={style.wrapper}>
            <UnderlinedText name="classes"/>
            <AliceCarousel
                autoHeight
                mouseTracking
                items={classList}
                paddingLeft={100}
                // paddingRight={200}
                responsive={responsive}
                controlsStrategy="responsive"
                disableButtonsControls={true}
            />
        </div>

    );
}

export default Classes;