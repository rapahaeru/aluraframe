class NegociacaoController {

	constructor() {
		var $query = document.querySelector.bind(document);
			
		this._inputData = $query('#data'),
		this._inputQuantidade = $query('#quantidade'),
		this._inputValor = $query('#valor');
		this._ListaNegociacoes = new ListaNegociacoes();
		this._negociacoesView = new NegociacoesView($query('#negociacoes'));

		this._negociacoesView.update();
	}

	adiciona(event) {
		event.preventDefault();

		this._ListaNegociacoes.adiciona(this._criaNegociacao());
		// this._ListaNegociacoes.negociacoes.push(this._criaNegociacao()); //teste para simular programacao defensiva
		this._limpaFormulário();
		console.log(this._ListaNegociacoes);

	}

	_limpaFormulário() {
		this._inputData.value = "";
		this._inputValor.value = "0";
		this._inputQuantidade.value = 1;
		this._inputData.focus();
	}

	_criaNegociacao() {
		return new Negociacao(DateHelper.stringToDate(this._inputData.value), this._inputQuantidade.value, this._inputValor.value);
	}

}