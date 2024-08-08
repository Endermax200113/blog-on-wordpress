import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
import RegularButton from '../UI/button/RegularButton'
import { ReactComponent as SvgArrowPrev } from './../../assets/svg/arrow-prev.svg'
import { ReactComponent as SvgArrowNext } from './../../assets/svg/arrow-next.svg'
import { SvgAndPosition, SvgPosition } from '../../util/svg'
import TextLink from '../UI/text/TextLink'
import RegularText from '../UI/text/RegularText'
import { TypeTextTag } from '../../util/text'

type PropsPagination = {
	count: number
}

//TODO Доработать нумерацию страниц, в которой можно программно переходить на страницы
const Pagination: React.FC<PropsPagination> =
({count}) => {
	const [countPages]:
		[number, Dispatch<SetStateAction<number>>] =
		useState<number>(count)
	
	const [page, setPage]:
		[number, Dispatch<SetStateAction<number>>] =
		useState<number>(1)
	
	const [pages, setPages]:
		[Array<number>, Dispatch<SetStateAction<Array<number>>>] =
		useState<Array<number>>([])
	
	const svgPrev: SvgAndPosition = {
		svg: SvgArrowPrev,
		position: SvgPosition.LEFT
	}

	const svgNext: SvgAndPosition = {
		svg: SvgArrowNext,
		position: SvgPosition.RIGHT
	}

	useEffect((): void => {
		let tempArr: Array<number> = []

		for (let i: number = page - 3; i <= page + 3; i++) {
			if (i <= 0 || i > countPages) {
				continue
			}

			tempArr.push(i)
		}

		setPages(tempArr)
	}, [page, countPages])

	return (
		<div className="pagination">
			{
				page !== 1 &&
				<RegularButton 
					text="Предыдущая" 
					svg={svgPrev} 
					clazz={c => {return [c['button'], 'pagination__el']}}
					onClick={() => setPage(page - 1)}
				/>
			}
			{
				(page > 5 && page - 4 !== 2)

				? <React.Fragment>
					<TextLink 
						link='#' 
						clazz={c => {return [c['text-link'], 'pagination__el']}}
						onClick={() => setPage(1)}
					>1</TextLink>

					<RegularText 
						type={TypeTextTag.SPAN}
						clazz={c => {return [c['text'], 'pagination__el', 'cursor-default']}}
					>...</RegularText>
				</React.Fragment>

				: page === 5 
				? <TextLink
					link='#' 
					clazz={c => {return [c['text-link'], 'pagination__el']}}
					onClick={() => setPage(1)}
				>1</TextLink>

				: page - 4 === 2 && <React.Fragment>
					<TextLink
						link="#"
						clazz={c => {return [c['text-link'], 'pagination__el']}}
						onClick={() => setPage(1)}
					>1</TextLink>
					
					<TextLink
						link="#"
						clazz={c => {return [c['text-link'], 'pagination__el']}}
						onClick={() => setPage(2)}
					>2</TextLink>
				</React.Fragment>
			}
			{
				pages.map((numberPage: number, i: number): React.ReactElement => (
					numberPage === page
					
					? <RegularText 
						key={i}
						type={TypeTextTag.SPAN}
						clazz={c => {return [
							c['text'], 
							'pagination__el', 
							'pagination--here',
							'cursor-default'
						]}}
					>{`${numberPage}`}</RegularText>

					: <TextLink
						key={i}
						link="#"
						clazz={c => {return [c['text-link'], 'pagination__el']}}
						onClick={() => setPage(numberPage)}
					>{`${numberPage}`}</TextLink>
				))
			}
			{
				page + 4 === countPages

				? <TextLink
					link="#"
					clazz={c => {return [c['text-link'], 'pagination__el']}}
					onClick={() => setPage(countPages)}
				>{`${countPages}`}</TextLink>
				
				: page + 4 === countPages - 1 ?
				<React.Fragment>
					<TextLink
						link="#"
						clazz={c => {return [c['text-link'], 'pagination__el']}}
						onClick={() => setPage(countPages - 1)}
					>{`${countPages - 1}`}</TextLink>
					
					<TextLink
						link="#"
						clazz={c => {return [c['text-link'], 'pagination__el']}}
						onClick={() => setPage(countPages)}
					>{`${countPages}`}</TextLink>
				</React.Fragment>

				: page + 3 < countPages &&
				<React.Fragment>
					<RegularText 
						type={TypeTextTag.SPAN}
						clazz={c => {return [c['text'], 'pagination__el', 'cursor-default']}}
					>...</RegularText>
					
					<TextLink 
						link='#' 
						clazz={c => {return [c['text-link'], 'pagination__el']}}
						onClick={() => setPage(countPages)}
					>{`${countPages}`}</TextLink>
				</React.Fragment>
			}
			{
				page !== countPages &&
				<RegularButton 
					text="Следующая" 
					svg={svgNext}
					clazz={c => {return [c['button'], 'pagination__el']}}
					onClick={() => setPage(page + 1)}
				/>
			}
		</div>
	)
}

export default Pagination