import React from 'react'

class DayAndDate extends React.Component {

    constructor(props) {

		super(props);
		this.state = {
			date: ''
		}

	}

	componentDidMount() {

		this.setDayAndDate();
		this.setDateInterval = setInterval(this.setDayAndDate.bind(this), 5000);

	}

	componentWillUnmount() {

		clearInterval(this.setDateInterval);

	}

	setDayAndDate() {

		var dateObj  = new Date(),
            weekdays = new Array(7),
            months   = new Array(12),
            weekday,
            month,
            day;

        weekdays     = new Array(7);
        weekdays[0]  =  "Sunday"; weekdays[1]  = "Monday"; weekdays[2]  = "Tuesday"; weekdays[3]  = "Wednesday";
        weekdays[4]  = "Thursday"; weekdays[5]  = "Friday"; weekdays[6]  = "Saturday";

        months = new Array(12);
        months[0]   = "January"; months[1]   = "February"; months[2]   = "March"; months[3]   = "April"; months[4]   = "May"; months[5]   = "June";
        months[6]   = "July"; months[7]   = "August"; months[8]   = "September"; months[9]   = "October"; months[10]  = "November"; months[11]  = "December";

        weekday = weekdays[dateObj.getDay()];
        month = months[dateObj.getMonth()];
        day = dateObj.getDate();

		this.setState({
            date: weekday + ', ' + month + ' ' + day
        });

	}

	render() {

		return (
			<div className="DayAndDate">
                {this.state.date}
			</div>
		)

	}
}

export default DayAndDate;
