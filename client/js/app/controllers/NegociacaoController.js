class NegociacaoController {

	constructor() {
		let $query = document.querySelector.bind(document);
			
		this._inputData = $query('#data').value,
		this._inputQuantidade = $query('#quantidade').value,
		this._inputValor = $query('#valor').value;		
	}

	adiciona(event) {
		event.preventDefault();
		
		let helper = new DateHelper();

		let negociacao = new Negociacao(helper.stringToDate(this._inputData), this._inputQuantidade, this._inputValor);
		console.log(negociacao);
		console.log(helper.dateToString(negociacao.data));

	}

}