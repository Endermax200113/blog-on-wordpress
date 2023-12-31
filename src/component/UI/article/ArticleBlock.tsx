import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import cl from './ArticleBlock.module.sass'
import { TypeArticle } from '../../../util/article'
import RegularButton from '../button/RegularButton'
import Datetime from '../datetime/Datetime'
import Title from '../text/Title'
import Description from '../text/Description'

type PropsArticleBlock = {
	category: string
	date: string
	title: string
	children?: string
	img?: string
	type: TypeArticle
}

const ArticleBlock: React.FC<PropsArticleBlock> = 
({category, date, title, children, img, type}) => {
	const [whiteCategory, setWhiteCategory]: 
	[boolean, Dispatch<SetStateAction<boolean>>] 
		= useState<boolean>(type === TypeArticle.SMALL)

	const [whiteDatetime, setWhiteDatetime]: 
	[boolean, Dispatch<SetStateAction<boolean>>] 
		= useState<boolean>(type === TypeArticle.SMALL)

	const [whiteTitle, setWhiteTitle]: 
	[boolean, Dispatch<SetStateAction<boolean>>] 
		= useState<boolean>(type === TypeArticle.SMALL)

	const [rootClasses, setRootClasses]: 
	[Array<string>, Dispatch<SetStateAction<Array<string>>>] 
		= useState<Array<string>>([])

	type Styles = {
		readonly [key: string]: string
	}

	useEffect(() => {
		switch (type) {
			case TypeArticle.USUALLY:
				setRootClasses([cl['article'], cl['article--usually']])
				break
			case TypeArticle.SHORTER:
				setRootClasses([cl['article'], cl['article--shorter']])
				break
			case TypeArticle.SMALL:
				setRootClasses([cl['article'], cl['article--small']])
				break
			case TypeArticle.ONLY_TITLE:
				setRootClasses([cl['article'], cl['article--only-title']])
				break
			default:
				break
		}
	}, [type])

	const getCompCategory = (): React.ReactElement => {
		switch (type) {
			case TypeArticle.USUALLY: 
			case TypeArticle.SHORTER:
			case TypeArticle.ONLY_TITLE:
				return <RegularButton text={category} />
			default:
				return <RegularButton text={category} white={!img ? whiteCategory : true} hoverToBlue={!img} />
		}
	}

	const getCompDatetime = (clazz?: string): React.ReactElement => {
		const getClasses = (c: Styles): Array<string> => {
			return !clazz ? [c['datetime']] : [c['datetime'], clazz]
		}

		switch (type) {
			case TypeArticle.USUALLY:
			case TypeArticle.SHORTER:
			case TypeArticle.ONLY_TITLE:
				return <Datetime clazz={(c: Styles) => getClasses(c)} date={date} />
			default:
				return <Datetime clazz={(c: Styles) => getClasses(c)} date={date} white={!img ? whiteDatetime : true} />
		}
	}

	const getCompTitle = (clazz: string): React.ReactElement => {
		const getClasses = (c: Styles): Array<string> => {
			return [c['title'], clazz]
		}

		switch (type) {
			case TypeArticle.USUALLY:
			case TypeArticle.SHORTER:
			case TypeArticle.ONLY_TITLE:
				return <Title clazz={(c: Styles) => getClasses(c)} text={title} />
			default:
				return <Title clazz={(c: Styles) => getClasses(c)} text={title} white={!img ? whiteTitle : true} />
		}
	}

	const getCompDescription = (clazz: string): React.ReactElement => {
		try {
			const getClasses = (c: Styles): Array<string> => {
				return [c['description'], clazz]
			}

			switch (type) {
				case TypeArticle.USUALLY:
				case TypeArticle.SHORTER:
					return <Description clazz={(c: Styles) => getClasses(c)}>{children}</Description>
				default:
					throw new Error("Невозможно получить описание, если тип статьи является либо маленький, либо только заголовочный!")
			}
		} catch (err) {
			console.error(err);
			return <Description></Description>
		}
	}

	const getCompArticle = (): React.ReactElement => {
		switch (type) {
			case TypeArticle.USUALLY:
				return <article className={rootClasses.join(' ')}>
					<div className={cl['article__info']}>
						{getCompCategory()}
						{getCompDatetime()}
					</div>

					{getCompTitle(cl['title--usually'])}
					{getCompDescription(cl['description--usually'])}
				</article>
			case TypeArticle.SHORTER:
				return <article className={rootClasses.join(' ')}>
					<div className={cl['article__info']}>
						{getCompCategory()}
						{getCompDatetime()}
					</div>

					{getCompTitle(cl['title--shorter'])}
					{getCompDescription(cl['description--shorter'])}
				</article>
			case TypeArticle.SMALL:
				return <article 
					className={rootClasses.join(' ')}
					onMouseEnter={() => setWhiteComponents(false)}
					onMouseLeave={() => setWhiteComponents(true)}
				>
					{img &&
						<div className={[cl['background'], cl['article__background']].join(' ')}>
							<img src={img} alt={title} className={cl['background__image']} />
							<div className={cl['background__dark']}></div>
						</div>
					}
					
					<div className={cl['article__top']}>
						{getCompCategory()}
						{getCompTitle(cl['title--small'])}
					</div>

					{getCompDatetime(cl['article__bottom'])}
				</article>
			case TypeArticle.ONLY_TITLE:
				return <article className={rootClasses.join(' ')}>
					<div className={cl['article__info']}>
						{getCompCategory()}
						{getCompDatetime()}
					</div>

					{getCompTitle(cl['title--only-title'])}
				</article>
			default:
				return <article></article>
		}

		function setWhiteComponents(white: boolean): void  {
			setWhiteCategory(white)
			setWhiteDatetime(white)
			setWhiteTitle(white)

			if (!white) {
				setRootClasses([cl['article'], cl['article--small'], cl['article--white']])
			} else {
				setRootClasses([cl['article'], cl['article--small']])
			}
		}
	}
	
	return getCompArticle()
}

export default ArticleBlock