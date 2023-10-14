import React from 'react'
import './../assets/sass/App.sass'
import Title from './UI/text/Title'
import ArticleItem from './UI/article/ArticleItem'
import Line from './UI/line/Line'

type PropsSirebarNews = {
	news: Array<News>
}

type News = {
	title: string
	link: string
	date: string
}

const SidebarNews: React.FC<PropsSirebarNews> = 
({news}) => {
	return (
		<div className="news">
			<Title text="Популярные новости" />

			<div className="news__articles">
				{news.map((item: News, index: number): React.ReactElement => (
					<React.Fragment key={index}>
						<ArticleItem
							title={item.title}
							link={item.link}
							date={item.date}
						/>
						{
							index !== 2 && 
							<Line />
						}
					</React.Fragment>
				))}
			</div>
		</div>
	)
}

export default SidebarNews