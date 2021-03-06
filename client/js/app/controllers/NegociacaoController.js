class NegociacaoController {

	constructor() {
		var $query = document.querySelector.bind(document);
			
		this._inputData = $query('#data'),
		this._inputQuantidade = $query('#quantidade'),
		this._inputValor = $query('#valor');

		this._ListaNegociacoes = new Bind(
			new ListaNegociacoes(),
			new NegociacoesView($query('#negociacoes')),
			'adiciona', 'limpaCampos', 'ordena');
		
		this._mensagem = new Bind(
			new Mensagem(),
			new MensagemView($query('#mensagemView')), 
			'texto');

		this._ordemAtual = '';

	}

	adiciona(event) {
		event.preventDefault();

		this._ListaNegociacoes.adiciona(this._criaNegociacao());
		this._mensagem.texto = "Negociação adicionada com sucesso!";
		this._limpaFormulário();
		console.log(this._ListaNegociacoes);

	}

	importaNegociacoes() {
		let service = new NegociacaoService();

		service
		.obterNegociacoes()
		.then(negociacoes => {
			negociacoes.forEach(negociacao => this._ListaNegociacoes.adiciona(negociacao));
			this._mensagem.texto = "Negociações importadas com sucesso";
		})
		.catch(erro => this._mensagem.texto = erro);
		
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

	ordena(coluna) {
		console.log(coluna);
		if (this._ordemAtual == coluna) {
			this._ListaNegociacoes.inverteOrdem();
		} else {
			this._ListaNegociacoes.ordena((a,b) => a[coluna] - b[coluna]);	
		}
		
		this._ordemAtual = coluna;
	}

}