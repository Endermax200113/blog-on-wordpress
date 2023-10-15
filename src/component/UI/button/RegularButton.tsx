import React, {FunctionComponent, SVGProps} from 'react'
import cl from './RegularButton.module.sass'
import { SvgAndPosition } from '../../../util/svg'

type PropsRegularButton = {
	text: string
	svg?: SvgAndPosition
	white?: boolean
	hoverToBlue?: boolean
	[props: string]: any
}

const RegularButton: React.FC<PropsRegularButton> = 
({text, svg, white, hoverToBlue, ...props}) => {
	const rootClasses: Array<string> = [cl['button']]

	if (white) {
		if (!hoverToBlue) {
			rootClasses.push(cl['button--white'])
		} else {
			rootClasses.push(cl['button--white-hover-blue'])
		}
	}

	return (
		<button type="button" {...props} className={rootClasses.join(' ')}>
			{text}
		</button>
	)
}

export default RegularButton