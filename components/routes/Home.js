import React from 'react'

/* Custom Components */
import Time from '../Time'
import DayAndDate from '../DayAndDate'
import Weather from '../Weather'

class Home extends React.Component {

	render() {

		return (
			<div className="homeContainer">
                <Time />
                <DayAndDate />
                <Weather />
			</div>
		)

	}
}

export default Home;
