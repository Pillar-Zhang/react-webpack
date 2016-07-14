import React from 'react';
import '../css/stopwatch/jquery.timepicker.css';
import '../css/stopwatch/timestyles.css';
import '../js/stopwatch/jquery.timepicker.min.js';
import '../js/stopwatch/hammer.js';
import '../js/stopwatch/script.js';
import '../js/stopwatch/alarm.js';
import '../js/stopwatch/stopwatch.js';
import '../js/stopwatch/timer.js';


class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Stopwatch';
    }
    render() {
        return (
        		<div className="container stopwatch">
                     
                        <div className="clock inactive z-depth-1">
                            <span>0:00:00.0</span>
                            <div className="overlay waves-effect"></div>
                        </div>
                    </div>

        	)
    }
}

export default Stopwatch;
