import React, {FunctionComponent, SVGProps} from 'react'
import cl from './RegularButton.module.sass'
import { SvgAndPosition, SvgPosition } from '../../../util/svg'

type PropsRegularButton = {
	text: string
	svg?: SvgAndPosition
	white?: boolean
	hoverToBlue?: boolean
	clazz?: (Function: ({readonly [key: string]: string})) => Array<string>
	[props: string]: any
}

const RegularButton: React.FC<PropsRegularButton> = 
({text, svg, white, hoverToBlue, clazz, ...props}) => {
	const rootClasses: 
		Array<string> = 
		!clazz ? [cl['button']] : clazz(cl)

	const rootClassesSvg: 
		Array<string> | undefined = 
		!svg?.clazz ? [cl['button__el'], cl['svg']] : svg.clazz(cl)

	const SvgElement:
		FunctionComponent<SVGProps<SVGSVGElement>> =
		!svg ? React.createElement("svg") as any : svg.svg

	if (white) {
		if (!hoverToBlue) {
			rootClasses.push(cl['button--white'])
			rootClassesSvg?.push(cl['svg--white'])
		} else {
			rootClasses.push(cl['button--white-hover-blue'])
			rootClassesSvg?.push(cl['svg--white-hover-blue'])
		}
	}

	return (
		<button type="button" {...props} className={rootClasses.join(' ')}>
			{
				(svg && svg.position === SvgPosition.LEFT) &&
				<SvgElement className={rootClassesSvg?.join(' ')} />
			}
			{text}
			{
				(svg && svg.position === SvgPosition.RIGHT) &&
				<SvgElement className={rootClassesSvg?.join(' ')} />
			}
		</button>
	)
}

export default RegularButton