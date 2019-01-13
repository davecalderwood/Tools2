import React, { Component } from "react";

export default class DayNames extends Component {
    render() {
        return (
          <div className="row day-names">
            <span className="day">Sunday</span>
            <span className="day">Monday</span>
            <span className="day">Tuesday</span>
            <span className="day">Wednesday</span>
            <span className="day">Thursday</span>
            <span className="day">Friday</span>
            <span className="day">Saturday</span>
          </div>
        );
    }
}