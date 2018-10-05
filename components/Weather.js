import React from 'react'
import Request from 'superagent'

class Weather extends React.Component {

    constructor(props) {

		super(props);
		this.state = {
			currentStatus: '',
            currentDay: '',
            currentCelsius: '',
			days: []
		}

	}

    componentWillMount() {
        var currentURL = 'http://api.openweathermap.org/data/2.5/weather?q=Ottawa,ca&mode=json&units=metric&APPID=9a854a9cfb5f0ec7780f3cf3cbc279aa',
            forecastURL = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Ottawa,ca&mode=json&units=metric&APPID=9a854a9cfb5f0ec7780f3cf3cbc279aa',
            current,
            forecast,
            currentStatus,
            currentDay,
            currentCelsius,
            i,
			j,
			dateObj,
			weekday,
			day = {},
			days = [];
			
		var weekdays     = [];
	        weekdays[0]  =  "Sunday"; weekdays[1]  = "Monday"; weekdays[2]  = "Tuesday"; weekdays[3]  = "Wednesday";
	        weekdays[4]  = "Thursday"; weekdays[5]  = "Friday"; weekdays[6]  = "Saturday";
			
		Request.get(currentURL).then((response) => {

            current = response.body;

            currentStatus     = current.weather[0].description;
            currentDay        = 'NOW';
            currentCelsius    = Math.round(current.main.temp);

            this.setState({
                currentStatus: currentStatus,
                currentDay: currentDay,
                currentCelsius: currentCelsius
            });
        });

        Request.get(forecastURL).then((response) => {

            forecast = response.body.list;

            for (i = 0; i < 4; i++) {
				let day = {};
				
				dateObj = new Date(0);
				dateObj.setUTCSeconds(forecast[i].dt);
				
				day.weekday = weekdays[dateObj.getDay()];
				day.status 	= forecast[i].weather[0].description;
				day.high 	= Math.round(forecast[i].temp.max);
				day.low		= Math.round(forecast[i].temp.min);
				
				days.push(day);
				
            }
			
			this.setState({
				days: days
			});
			
        });
    }

	render() {
		
		return (
			<div>
				<div className="currentWeather">
					<div>
						<img src={'img/01.svg'} alt="boohoo" className="bigWeatherIcon"/>	
					</div>
					<ul className="currentWeatherList">
	                	<li>
	                    	{this.state.currentCelsius}
	                	</li>
	                	<li>
	                    	{this.state.currentDay}
	                	</li>
	                	<li>
	                    	{this.state.currentStatus}
	                	</li>
					</ul>
				</div>
				<div className="forecast">
					{
						this.state.days.map(function(day, index){
        					return <div className={'day'} key={index}>
										<div>
											<img src={'img/01.svg'} className="weatherIcon"/>	
										</div>
										<ul className="forecastList">
											<li>{day.high}</li>
											<li>{day.low}</li>
											<li>{day.weekday}</li>
											<li>{day.status}</li>
										</ul>
									</div>
						})
    				}
				</div>
			</div>
		)

	}
}

export default Weather;
