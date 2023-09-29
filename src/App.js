import React from 'react';
import './sass/App.sass';
import Description from './component/UI/text/Description';

function App() {
	return (
		<div className="app">
			<div className="component">
				<Description>
					Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще. 
				</Description>
			</div>
		</div>
	);
}

export default App;
