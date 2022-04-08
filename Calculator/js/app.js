let screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('td');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

buttons.forEach(element => {
	element.addEventListener('click', item => {
		let thisIs = item.target;
		let sval = screen.value;
		let val = thisIs.dataset.num;

		//controlling operator button
		if (sval != '' && thisIs.className == 'operat' && !isNaN(sval.slice(-1))) {
			screen.value += val;
		} else if (thisIs.className == 'number') { //controlling numbers button
			screen.value += val;
		} else if (sval != '' && thisIs.className == 'dot' && !isNaN(sval.slice(-1))) {
			screen.value += val;
		} else if (thisIs.className == 'clear')
			screen.value = '';
		else if (thisIs.className == 'equal') {
			if (screen.value == '') {
				screen.value = 'Please Enter a Value';
			} else {
				let answer = eval(screen.value);
				screen.value = answer;
			}
		}

	});
});