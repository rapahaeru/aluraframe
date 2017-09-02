class DateHelper {

	constructor() {
		throw new Error("Está classe não pode ser instanciada");
	}

	static stringToDate(string) {
		return new Date(string.split('-'));
	}

	static dateToString(date) {
		return date.getDate() 
			+ '/' + (date.getMonth() + 1)
			+ '/' + date.getFullYear();
	}
}