import React from 'react';
import './assets/sass/App.sass';
import ArticleBlock from './component/UI/article/ArticleBlock';
import { TypeArticle } from './util/article';

function App() {
	return (
		<div className="app">
			<div className="component">
				{/*  */}
				<ArticleBlock
					category="Категория 1"
					date="2020-12-13"
					title="Управление ИТ-активами – скучная рутина или творческая задача?"
					img={require("./assets/img/article1.png")}
					type={TypeArticle.ONLY_TITLE}
				>
					Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще. 
				</ArticleBlock>
			</div>
		</div>
	);
}

export default App;
