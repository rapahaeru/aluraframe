class ListaNegociacoes {

	constructor() {
		this._negociacoes = [];
	}

	adiciona(negociacao) {
		this._negociacoes.push(negociacao);
	}

	get negociacoes() {
		// return this._negociacoes;
		return [].concat(this._negociacoes); // programação defensiva
	}

	limpaCampos() {
		this._negociacoes = [];
	}

	volumeTotal() {
		return this._negociacoes.reduce((total, n) => total += n.volume, 0.0);
	}

}