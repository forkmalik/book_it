import React, {useEffect} from "react";
import InfoPage from "./InfoPage/InfoPage";
import style from "./MainPage.module.scss";
import TypePage from "./TypePage/TypePage";
import {DISPLAY_TYPE} from "../../redux/types";
import {connect} from "react-redux";

/*const MainPage = ({display}) => {

    return (
        <div className={style.wrapper}>
            <InfoPage />
        </div>
    );

}*/

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: "info"
        }

    }

        render() {
            return (
                <div className={style.wrapper}>
                    <InfoPage />
                    {this.props.display === "type" && this.setState("type")}
                </div>
            );
        }
    }

    function mapStateToProps (state) {
        return {
            display: state.display
        }
    }

export default connect(mapStateToProps) (MainPage);