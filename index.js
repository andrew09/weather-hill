import React from 'react'
import { render } from 'react-dom'
import Main from './components/Main'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

render(<Main />, document.getElementById('app'))
