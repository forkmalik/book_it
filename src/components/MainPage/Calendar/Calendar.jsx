import React from 'react';
import classnames from 'classnames';
import * as calendar from './calendarData';
import style from './Calendar.module.scss';
import UnderlinedText from "../UnderlinedText/UnderlinedText";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import TimePicker from "./TimePicker/TimePicker";
import {setBookingInfo} from "../../../redux/data";


export default class Calendar extends React.Component {
    static defaultProps = {
        date: new Date(),
        years: [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'],
        weekDayNames: ['Mon', 'Tue', 'Wed', 'Thu' , 'Fri', 'Sat', 'Sun'],
        onChange: Function.prototype
    };

    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null
    };

    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);
        
        this.setState({ date });
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);
        
        this.setState({ date });
    };

    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);

        this.setState({ date });
    };

    handleDayClick = date => {
        this.setState({ selectedDate: date });
        
        this.props.onChange(date);
        setBookingInfo('date', date);
    };

    render() {
        const { years, monthNames, weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthData = calendar.getMonthData(this.year, this.month);

        return (
            <div >
                <UnderlinedText name="calendar"/>
                <div className={style.container}>
                    <div className={style.calendar}>
                        <div className={style.header}>
                            <button onClick={this.handlePrevMonthButtonClick}>
                                <FontAwesomeIcon  className={style.angle_left} icon={solid('angle-left')} />
                                Prev Month
                            </button>
                            <div className={style.title}>
                                <span>{monthNames[this.month]} </span>
                                <span>{this.year}</span>
                            </div>
                            <button onClick={this.handleNextMonthButtonClick}>Next Month
                                <FontAwesomeIcon  className={style.angle_right} icon={solid('angle-right')} />
                            </button>
                        </div>

                        <div className={style.table}>
                            <thead>
                            <tr>
                                {weekDayNames.map(name =>
                                    <th key={name} className={classnames(name === 'Sat' && style.weekend,
                                        name === 'Sun' && style.weekend
                                    )}>{name}</th>
                                )}
                            </tr>
                            </thead>

                            <tbody>
                            {monthData.map((week, index) =>
                                <tr key={index} className="week">
                                    {week.map((date, index) => date ?
                                        <td
                                            key={index}
                                            className={classnames(style.day,
                                                calendar.areEqual(date, currentDate) && style.today,
                                                calendar.areEqual(date, selectedDate) && style.selected,
                                                calendar.getDayOfWeek(date) === 5 && style.inactive,
                                                calendar.getDayOfWeek(date) === 6 && style.inactive)}
                                            onClick={() => this.handleDayClick(date)}
                                        >{date.getDate()}</td>
                                        :
                                        <td key={index} />
                                    )}
                                </tr>
                            )}
                            </tbody>
                        </div>
                    </div>
                    <TimePicker handlers={this.props.handlers}/>
                </div>

            </div>
        );
    }
}