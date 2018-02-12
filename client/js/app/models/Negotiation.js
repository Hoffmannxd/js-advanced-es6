//business rules implemented here
//anemic classes doesn't have manipulation/behavior, just data
//oo implies strong relation between data and behavior
//method is a function in a class
//prefix _ implies a private atribute (convention), cannot be altered outside the function
//TypeScript allow private properties/atributes
class Negotiation {

	constructor(data, quantidade, valor){

		//this is declaring a implict var inside this object instance

		//to avoid a user insert a date and setDate latter
		this._data = new Date(data.getTime());

		this._quantidade = quantidade;
		this._valor = valor;

		//automatically freeze all atributes, so they will be acessible, via get, but cannot be altered
		//shallow, not deep
		Object.freeze(this);
	}

	//in order to provide access to *private* atributes --- read methods
	//so using <instance>.<read-method> will not change current value of the atribute
	get volume(){
		return this._quantidade * this._valor;
	}

    //getter propperties doesn't receive values
	get data(){
		//new Date to avoid extern user setDate _data value
		return new Date(this._data.getTime());
	}

	get quantidade(){
		return this._quantidade;
	}

	get valor(){
		return this._valor;
	}





}