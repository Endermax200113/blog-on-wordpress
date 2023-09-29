import React from 'react'
import cl from './Title.module.sass'

const Title = ({text}) => {
	return (
		<h1 className={cl['title']}>
			{text}
		</h1>
	)
}

export default Title