import React, { Dispatch, SetStateAction, useState } from 'react'
import { getStringDate } from '../../../util/date'
import cl from './Datetime.module.sass'

type PropsDatetime = {
	date: string
	white?: boolean
	clazz?: (Function: ({readonly [key: string]: string})) => Array<string>
}

const Datetime: React.FC<PropsDatetime> = 
({date, white = false, clazz}) => {
	const [datetime]: 
	[Date, Dispatch<SetStateAction<Date>>] 
		= useState<Date>(new Date(date))
		
	const [strDate]: 
	[string, Dispatch<SetStateAction<string>>] 
		= useState<string>(getStringDate(datetime))
		
	const rootClasses: 
	Array<string> 
		= !clazz ? [cl['datetime']] : clazz(cl)

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