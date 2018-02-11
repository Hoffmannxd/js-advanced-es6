var fields = [ //catching DOM elements
	document.querySelector('#data'),
	document.querySelector('#quantidade'),
	document.querySelector('#valor')
];

//console.log(fields);


var tbody = document.querySelector('table tbody'); // table is inside this table

document.querySelector('.form').addEventListener('submit', function(event) { //action plus callback function

	event.preventDefault(); // avoid reload

	var tr = document.createElement('tr');

	fields.forEach(function(fields) {

		var td = document.createElement('td');
		td.textContent = fields.value;
		tr.appendChild(td);
	});


	var tdVolume = document.createElement('td');
	tdVolume.textContent = fields[1].value * fields[2].value;
	// getting volume content, equal 2 other values multiplicated

	tr.appendChild(tdVolume)

	tbody.appendChild(tr);

	//resetting fields at the final of event (insert) in order to improve user experience and letting 'data' on focus to easy next subit
	fields[0].value = '';
	fields[1].value = 1;
	fields[2].value = 0;

	fields[0].focus();
});