import React from 'react';
import './assets/sass/App.sass';
import Pagination from './component/pagenation/Pagination';

function App(): React.ReactElement {
	return (
		<div className="app">
			<div className="component">
				<Pagination count={10} />
			</div>
		</div>
	);
}

export default App;
