class ListOfNegotiations {

	constructor(){

		this._negotiations = []; //; ??
	}

	addNegotiation(negotiation){
		this._negotiations.push(negotiation);
	}

	get negotiations(){

		//returning a copy to code defensively. protecting this._negotiation
		return [].concat(this._negotiations);
	}
}