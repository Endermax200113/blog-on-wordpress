import React, { useEffect, useState } from 'react'
import { getStringDate } from './../../../util/date'
import cl from './Datetime.module.sass'

const Datetime = ({date}) => {
	const [datetime] = useState(new Date(date))
	const [strDate, setStrDate] = useState(getStringDate(datetime))

	useEffect(() => {
		setStrDate(getStringDate(datetime))
	}, [datetime])

	return (
		<time dateTime={date} className={cl['datetime']}>
			{strDate}
		</time>
	)
}

export default Datetime