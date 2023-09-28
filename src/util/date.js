export const getStringMonth = (date) => {
	const month = date.getMonth()
	let result

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

export const getStringDate = (date) => {
	const day = date.getDate();
	const month = getStringMonth(date);
	const year = date.getFullYear();

	return `${day} ${month} ${year}`
}