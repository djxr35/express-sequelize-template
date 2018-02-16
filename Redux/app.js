import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' // REACT-REDUX

import store from './store'
import RoutePage from './RoutePage'


ReactDOM.render( // Provider from REACT-REDUX; could be omitted for plain
	<Provider store={store}>
		<div>
			<hr />
			<hr />
		</div>
	</Provider>,
	document.querySelector('#app') // or   document.getElementById('app')

)
