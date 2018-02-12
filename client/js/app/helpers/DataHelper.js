//Helper classes are stateless, similar to util but with some context.

class DateHelper {

	constructor(){
		throw new Error('DateHelper cannot be instantiated');
	}

	//format yyyy-mm-dd
	static stringToDate(string){

		if(!/\d{4}-\d{2}-\d{2}/.test(string))
			throw new Error('Invalid format, please enter string of format  YYYY-MM-DD');
		return new Date(...string.split('-').map((item, indice) => item - indice % 2));
	}

    //exb dd/mm/yyyy
	static dateToString(date){
		//there is best solution: template string
		//return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	}	
}