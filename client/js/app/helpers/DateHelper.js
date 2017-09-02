class DateHelper {

	stringToDate(string) {
		return new Date(string.split('-'));
	}

	dateToString(date) {
		return date.getDate() 
			+ '/' + (date.getMonth() + 1)
			+ '/' + date.getFullYear();
	}
}