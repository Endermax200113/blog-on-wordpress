import React, { Dispatch, SetStateAction, useState } from 'react'
import cl from './ArticleItem.module.sass'
import TextLink from '../text/TextLink'
import Datetime from '../datetime/Datetime'

type PropsArticleItem = {
	title: string
	link: string
	date: string
}

const ArticleItem: React.FC<PropsArticleItem> = 
({title, link, date}) => {
	const [hoverLink, setHoverLink]:
	[boolean, Dispatch<SetStateAction<boolean>>]
		= useState<boolean>(false)

	type StyleTextLink = {
		readonly [key: string]: string
	}

	return (
		<div 
			className={cl['article-item']}
			onMouseEnter={() => setHoverLink(true)}
			onMouseLeave={() => setHoverLink(false)}
			onClick={() => {document.location.href = link}}
		>
			<TextLink 
				link={link}
				clazz={(c: StyleTextLink) => {
					return !hoverLink ? 
					[c['text-link'], cl['text-link--title']] : 
					[c['text-link'], cl['text-link--title'], c['text-link--hover']]
				}}
			>
				{title}
			</TextLink>
			
			<Datetime date={date} />
		</div>
	)
}

export default ArticleItem