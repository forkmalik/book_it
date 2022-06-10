import React from "react";
import style from './Campus.module.scss';
import {getCampuses, setBookingInfo} from "../../../redux/data";
import Card from "../Card/Card";
import UnderlinedText from "../UnderlinedText/UnderlinedText";
import AliceCarousel from "react-alice-carousel";

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const Campus = (props) => {
    let campuses = getCampuses();
    const campusList = campuses.map((camp) => <Card title={camp.campus_name}
                                                    img={camp.image} cardType="campus"
                                                    displayPage={props.handlers.displayTypeHandler}
                                                    setCamp={setBookingInfo}/>)

    return (
        <div className={style.container}>
            <UnderlinedText name="campuses"/>
            <AliceCarousel
                autoHeight
                mouseTracking
                items={campusList}
                paddingLeft={100}
                // paddingRight={200}
                responsive={responsive}
                controlsStrategy="responsive"
                disableButtonsControls={false}
            />
        </div>
    );
}

export default Campus;