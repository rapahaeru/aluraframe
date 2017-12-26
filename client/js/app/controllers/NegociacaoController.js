class NegociacaoController {

	constructor() {
		var $query = document.querySelector.bind(document);
			
		this._inputData = $query('#data'),
		this._inputQuantidade = $query('#quantidade'),
		this._inputValor = $query('#valor');
		// this._ListaNegociacoes = new ListaNegociacoes(model => this._negociacoesView.update(model)); //arrow function com `this` léxico

		this._ListaNegociacoes = new Bind(
			new ListaNegociacoes(),
			new NegociacoesView($query('#negociacoes')),
			'adiciona', 'limpaCampos');
		
		this._mensagem = new Bind(
			new Mensagem(),
			new MensagemView($query('#mensagemView')), 
			'texto');

	}

	adiciona(event) {
		event.preventDefault();

		this._ListaNegociacoes.adiciona(this._criaNegociacao());
		this._mensagem.texto = "Negociação adicionada com sucesso!";
		this._limpaFormulário();
		console.log(this._ListaNegociacoes);

	}

	importaNegociacoes() {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'negociacoes/semana');
		xhr.onreadystatechange = () => {
			if(xhr.readyState == 4) {
				if(xhr.status == 200) {
					console.log(JSON.parse(xhr.responseText));
					// this._ListaNegociacoes.adiciona(JSON.parse(xhr.responseText));
					JSON.parse(xhr.responseText)
					.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
					.forEach(negociacao => this._ListaNegociacoes.adiciona(negociacao));
					this._mensagem.texto = "Negociações importadas com sucesso";

				} else {
					console.log('Nheh');
					console.log(xhr.responseText);
				}
			}
		};
		xhr.send();
	}

	apaga() {
		this._ListaNegociacoes.limpaCampos();
		this._mensagem.texto = "Negociações apagadas com sucesso!";
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