import React from "react";
import style from "./Classes.module.scss";
import getClassData from "../../../redux/data";
import Card from "../Card/Card";



const Classes = (props) => {
    let classData = getClassData(props.type);
    console.log(classData);
    const classList = classData.map((item) => <Card title={item.title} camp={item.camp} img={item.image}
                                                    type={item.type} cardType="classes"/>)


    return (
        <div>
            {classList}
        </div>
    );
}

export default Classes;