class ListaNegociacoes {

	constructor(armadilha) {
		this._negociacoes = [];
		this._armadilha = armadilha;
	}

	adiciona(negociacao) {
		this._negociacoes.push(negociacao);
		this._armadilha(this);
	}

	get negociacoes() {
		// return this._negociacoes;
		return [].concat(this._negociacoes); // programação defensiva
	}

	limpaCampos() {
		this._negociacoes = [];
		this._armadilha(this);
	}

}