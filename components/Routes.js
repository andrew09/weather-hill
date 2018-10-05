import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

/* Custom Routes */
import App from './App'
import Home from './routes/Home'

class Routes extends React.Component {
	render () {
		return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                </Route>
            </Router>
		)
	}
}

export default Routes;
