import React from 'react';
import './assets/sass/App.sass';
import Sidebar from './component/sidebar/Sidebar';

function App(): React.ReactElement {
	return (
		<div className="app">
			<div className="component">
				<Sidebar />
			</div>
		</div>
	);
}

export default App;
