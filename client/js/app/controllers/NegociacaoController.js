class NegociacaoController {

	constructor() {
		let $query = document.querySelector.bind(document);
			
		this._inputData = $query('#data').value,
		this._inputQuantidade = $query('#quantidade').value,
		this._inputValor = $query('#valor').value;		
	}

	adiciona(event) {
		event.preventDefault();

		let negociacao = new Negociacao(DateHelper.stringToDate(this._inputData), this._inputQuantidade, this._inputValor);
		console.log(negociacao);
		console.log(DateHelper.dateToString(negociacao.data));

	}

}