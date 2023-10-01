import React, { useState } from 'react'
import { getStringDate } from './../../../util/date'
import cl from './Datetime.module.sass'

const Datetime = ({date, white = false, clazz = undefined}) => {
	const [datetime] = useState(new Date(date))
	const [strDate] = useState(getStringDate(datetime))
	const rootClasses = !clazz ? [cl['datetime']] : clazz(cl)

	if (white) {
		rootClasses.push(cl['datetime--white'])
	}

	return (
		<time dateTime={date} className={rootClasses.join(' ')}>
			{strDate}
		</time>
	)
}

export default Datetime