import React, { useEffect, useState } from 'react'
import cl from './ArticleBlock.module.sass'
import { TypeArticle } from '../../../util/article'
import RegularButton from './../button/RegularButton'

const ArticleBlock = ({category, date, title, children, img, type}) => {
	const getCompCategory = () => {
		switch (type) {
			case TypeArticle.USUALLY || TypeArticle.SHORTER || TypeArticle.ONLY_TITLE:
				return <RegularButton text={category} />
			default:
				return <RegularButton text={category} white={true} hoverToBlue={!img} />
		}
	}
	
	return (
		<article className={cl['article']}>
			{getCompCategory()}
		</article>
	)
}

export default ArticleBlock