class NegociacaoController {

	constructor() {
		let $query = document.querySelector.bind(document);
			
		this._inputData = new Date($query('#data').value.split('-')),
		this._inputQuantidade = $query('#quantidade').value,
		this._inputValor = $query('#valor').value;		
	}

	adiciona(event) {
		event.preventDefault();
		
		console.log('data', this._inputData);
		console.log('quantidade', this._inputQuantidade);
		console.log('valor', this._inputValor);

		let negociacao = new Negociacao(this._inputData, this._inputQuantidade, this._inputValor);
		console.log(negociacao);
	}

}