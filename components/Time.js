import React from 'react'

class Time extends React.Component {

    constructor(props) {

		super(props);
		this.state = {
			time: ''
		}

	}

	componentDidMount() {

		this.setTheTime();
		this.TimeInterval = setInterval(this.setTheTime.bind(this), 5000);

	}

	componentWillUnmount() {

		clearInterval(this.TimeInterval);

	}

	setTheTime() {

		var dateObj = new Date(),
			time = dateObj.toLocaleTimeString(
				navigator.language,
				{
					hour: '2-digit',
					minute:'2-digit'
				}
			),
			timeFormatted = time.replace(/:/g,'     ').replace(/AM/g,'').replace(/PM/g,'');

		if (timeFormatted.length < 10) {
			timeFormatted = '0' + timeFormatted;
		}

		this.setState({
            time: timeFormatted
        });

	}

	render() {

		return (
			<div className="time">
                {this.state.time}
			</div>
		)

	}
}

export default Time;
