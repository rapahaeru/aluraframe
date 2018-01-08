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

	ordena(criterio) {
		console.log('modelo');
		this._negociacoes.sort(criterio);
	}

	inverteOrdem() {
		console.log('inverte ordem')
		this._negociacoes.reverse();
	}

}