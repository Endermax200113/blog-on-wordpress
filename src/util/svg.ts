import {FunctionComponent, SVGProps} from 'react'

export type SvgAndPosition = {
	svg: FunctionComponent<SVGProps<SVGSVGElement>>
	position: SvgPosition
	clazz?: (Function: ({readonly [key: string]: string})) => Array<string>
}

export enum SvgPosition {
	LEFT, RIGHT
}