import React from 'react'
import './../assets/sass/App.sass'
import SidebarNews from './SidebarNews'

const Sidebar: React.FC = () => {
	const news: 
	Array<{title: string, link: string, date: string}>
		= [
			{
				title: "ITAM&SAMDay – самая настоящая удача!",
				link: "#",
				date: "2020-12-13"
			},
			{
				title: "Секреты лицензирования. Всё, что вы хотели знать про Microsoft, SAP и Oracle, но не знали, у кого спросить ...",
				link: "#",
				date: "2020-12-10"
			},
			{
				title: "Менеджмент XXI века. Надо ли готовиться к изменениям или мы давно уже должны были измениться?",
				link: "#",
				date: "2020-12-05"
			}
		]

	return (
		<aside className="sidebar">
			<div className="news sidebar__news">
				<SidebarNews news={news} />
			</div>

			<div className="sidebar__newsletter">

			</div>
		</aside>
	)
}

export default Sidebar