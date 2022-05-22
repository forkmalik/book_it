import React from "react";
import style from "./Header.module.scss";
import logoImage from "../../assets/ittle-logo.png";


const Header = (props) => {

    return (
        <div>
            <header className={style.header}>
                <div className={style.header__container}>
                    <h1 className={style.header__text}>Book It Yourself</h1>
                    <button className={style.header__button} onClick={props.displayType}>Book Now</button>
                </div>
                <img className={style.header__logo} src={logoImage} alt="" />
            </header>
        </div>

    );
};

export default Header;