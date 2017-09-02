class DateHelper {

	constructor() {
		throw new Error("Está classe não pode ser instanciada");
	}

	static stringToDate(string) {
		if(!/^\d{4}-\d{2}-\d{2}$/.test(string))
			throw new Error("Formato inválido. Correto: yyyy-mm-dd");
		return new Date(string.split('-'));
	}

	static dateToString(date) {
		return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
	}
}