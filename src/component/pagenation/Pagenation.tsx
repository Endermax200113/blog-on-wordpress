import React, { Dispatch, SetStateAction, useState } from 'react'
import RegularButton from '../UI/button/RegularButton'

const Pagenation: React.FC = () => {
	const [count, setCount]:
		[number, Dispatch<SetStateAction<number>>] =
		useState<number>(10)
	
	const [page, setPage]:
		[number, Dispatch<SetStateAction<number>>] =
		useState<number>(1)

	return (
		<div>
			{
				page - 4 > 0 &&
				<React.Fragment>
					<RegularButton text="" />
				</React.Fragment>
			}
		</div>
	)
}

export default Pagenation