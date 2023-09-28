import React from 'react';
import './sass/App.sass';
import Datetime from './component/UI/datetime/Datetime'

function App() {
	return (
		<div className="app">
			<div className="component">
				<Datetime date="2020-12-13" />
			</div>
		</div>
	);
}

export default App;
