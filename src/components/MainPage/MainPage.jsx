import React, {forwardRef, useImperativeHandle, useState} from "react";
import InfoPage from "./InfoPage/InfoPage";
import style from "./MainPage.module.scss";
import TypePage from "./TypePage/TypePage";
import {DISPLAY_TYPE} from "../../redux/types";
import {connect} from "react-redux";

const MainPage = forwardRef((props, ref) => {
    const [display, setDisplay] = useState("info");

    const changeDisplay = () => {
        // if(props.display === "type") {
        //     return <TypePage />
        // }
        // return <InfoPage />

    };

    useImperativeHandle(ref, () => ({
        changeDisplay: changeDisplay
    }));

    return (
        <div className={style.wrapper} >
            {props.display.display}
            {/*<InfoPage />*/}
            {/*<TypePage />*/}
        </div>
    );
})

// const MainPage = () => {
//
//      function changeDisplay () {
//          alert("work");
//      }
//
//      return (
//                  <div className={style.wrapper} >
//                      <InfoPage />
//                      {/*<TypePage />*/}
//                  </div>
//              );
//
//  }


// class MainPage extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             display: "info"
//         }
//
//     }
//
//         render() {
//             return (
//                 <div className={style.wrapper}>
//                     <InfoPage />
//                     {this.props.display === "type" && this.setState("type")}
//                 </div>
//             );
//         }
//     }

    function mapStateToProps (state) {
        return {
            display: state.display
        }
    }

export default connect(mapStateToProps, null, null, { forwardRef: true })(MainPage)
//export default  MainPage ;