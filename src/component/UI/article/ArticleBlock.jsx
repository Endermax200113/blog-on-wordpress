import React from 'react'
import cl from './ArticleBlock.module.sass'

const ArticleBlock = ({category, date, title, children, img, type}) => {
	return (
		<article className={cl['article']}>
			<img src={img} alt="Изображения" />
		</article>
	)
}

export default ArticleBlock