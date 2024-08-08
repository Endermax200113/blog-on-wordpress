import React from 'react';
import './assets/sass/App.sass';
import ContactInfo from './component/contacts/ContactInfo';

function App(): React.ReactElement {
	return (
		<div className="app">
			<div className="component">
				<ContactInfo />
			</div>
		</div>
	);
}

export default App;
