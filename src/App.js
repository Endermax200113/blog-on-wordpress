import React from 'react';
import './assets/sass/App.sass';
import ArticleBlock from './component/UI/article/ArticleBlock';

function App() {
	return (
		<div className="app">
			<div className="component">
				<ArticleBlock img={require("./assets/img/article1.png")} >
					Test
				</ArticleBlock>
			</div>
		</div>
	);
}

export default App;
