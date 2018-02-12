class ControllerNegotiation {

	constructor(){
		//cache strategy, go to DOM once
		let $ = document.querySelector.bind(document);

		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');

	}

	insert(event){
		event.preventDefault();

		//clearForm(){
		//	this._inputData = '';
		//	this._inputQuantidade = 0;
		//	this._inputValor = 0.0;
		//
		//	this._inputData.focus();
		//}



// Removed from here because it walk through DOM each time is called
		//using high order functions
		//bind to ensure context of invoke

		//let $ = document.querySelector.bind(document);
		//let inputData = $('#data');
		//let inputQuantidade = $('#quantidade');
		//let inputValor = $('#valor');

		//typeof evaluate type of instance, this will result error, missmatching string and date
		// ... spread split, inserting 3 args instead of array of string
		//indice % 2 operation just decrement when indice equals 1, to avoid using if and letting less verbose
		//arrow function: .map(function(x,y){}) == .map((x,y) => {})

		let date = new Date(...this._inputData.value.split('-').map((item, indice) => item - indice % 2));

		let negotiationCall = new Negotiation(
		date,
		this._inputQuantidade.value,
		this._inputValor.value
		);

		console.log(negotiationCall);

		//this.clearForm();

		//console.log(this.inputData.value);
		//console.log(this.Quantidade.value);
		//console.log(this.inputValor.value);
	}

	clearForm(){
		this._inputQuantidade = 0;
		this._inputValor = 0.0;
	
		this._inputData.focus();
	};

}

// ternary op works on JS, good to apply at map func
//push append element to lists