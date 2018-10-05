import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Routes from './Routes'

class Main extends React.Component {
	render () {
		return (
			<MuiThemeProvider>
  				<Routes />
			</MuiThemeProvider>
		)
	}
}

export default Main;
