import React from 'react';
import './sass/App.sass';
import Title from './component/UI/text/Title';

function App() {
	return (
		<div className="app">
			<div className="component">
				<Title text="Управление ИТ-активами – скучная рутина или творческая задача?" />
			</div>
		</div>
	);
}

export default App;
