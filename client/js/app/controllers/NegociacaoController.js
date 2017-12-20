class NegociacaoController {

	constructor() {
		var $query = document.querySelector.bind(document);
			
		this._inputData = $query('#data'),
		this._inputQuantidade = $query('#quantidade'),
		this._inputValor = $query('#valor');
		// this._ListaNegociacoes = new ListaNegociacoes(model => this._negociacoesView.update(model)); //arrow function com `this` léxico

		let self = this;

		this._ListaNegociacoes = new Proxy(new ListaNegociacoes(), {
            get: function(target, prop, receiver) {

                if(['adiciona', 'limpaCampos'].includes(prop) && typeof(target[prop]) == typeof(Function)) {
                    return function() {
						console.log(` ${prop} interceptada `);
						Reflect.apply(target[prop], target, arguments);
						self._negociacoesView.update(target);
                    }
                }

                return Reflect.get(target, prop, receiver)
            }
        });

		this._negociacoesView = new NegociacoesView($query('#negociacoes'));

		this._negociacoesView.update(this._ListaNegociacoes);

		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($query('#mensagemView'));
		this._mensagemView.update(this._mensagem);
	}

	adiciona(event) {
		event.preventDefault();

		this._ListaNegociacoes.adiciona(this._criaNegociacao());
		this._mensagem.texto = "Negociação adicionada com sucesso!";
		this._mensagemView.update(this._mensagem);
		this._limpaFormulário();
		console.log(this._ListaNegociacoes);

	}

	apaga() {
		this._ListaNegociacoes.limpaCampos();

		this._mensagem = new Mensagem("Negociações apagadas com sucesso");
		this._mensagemView.update(this._mensagem);
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