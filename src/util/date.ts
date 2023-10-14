export const getStringMonth = (date: Date): string => {
	const month: number = date.getMonth()
	let result: string

	switch (month) {
		case 0:
			result = 'янв'
			break
		case 1:
			result = 'фев'
			break
		case 2:
			result = 'мар'
			break
		case 3:
			result = 'апр'
			break
		case 4:
			result = 'май'
			break
		case 5:
			result = 'июн'
			break
		case 6:
			result = 'июл'
			break
		case 7:
			result = 'авг'
			break
		case 8:
			result = 'сен'
			break
		case 9:
			result = 'окт'
			break
		case 10:
			result = 'ноя'
			break
		case 11:
			result = 'дек'
			break
		default:
			result = 'err'
			break;
	}

	return result;
}

export const getStringDate = (date: Date): string => {
	const day: number = date.getDate();
	const month: string = getStringMonth(date);
	const year: number = date.getFullYear();

	return `${day} ${month} ${year}`
}