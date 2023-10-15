import {FunctionComponent, SVGProps} from 'react'

export type SvgAndPosition = {
	svg: FunctionComponent<SVGProps<SVGSVGElement>>
	position: SvgPosition
}

export enum SvgPosition {
	LEFT, RIGHT
}