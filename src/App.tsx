import React from 'react';
import './assets/sass/App.sass';
import Pagenation from './component/pagenation/Pagenation';
import Sidebar from './component/sidebar/Sidebar';
import RegularButton from './component/UI/button/RegularButton';
import { SvgAndPosition, SvgPosition } from './util/svg';
import { ReactComponent as Next } from './assets/svg/arrow-next.svg'

function App(): React.ReactElement {
	const svg: SvgAndPosition = {
		svg: Next,
		position: SvgPosition.RIGHT
	}

	return (
		<div className="app">
			<div className="component">
				<RegularButton text='Test' svg={svg} white hoverToBlue />
			</div>
		</div>
	);
}

export default App;
