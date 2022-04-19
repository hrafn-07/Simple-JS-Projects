/*** Make All Operations When Complated the Document ***/

let enterVal = document.querySelector('#todo-input');
const addButton = document.querySelector('.todo-button');
let ulTodos = document.querySelector('#todos');
const operatCheck = document.querySelectorAll('todo-operats-check');
const operatEdit = document.querySelectorAll('todo-operats-edit');
const operatDelete = document.querySelectorAll('todo-operats-delete');
const alertBox = document.querySelector('#alert');
const clsAlert = document.querySelector('.closebtn');

let listItems = [];
var i = 0;

class Todo_Item {
	constructor(text, isCheck) {
		this.text = text;
		this.isCheck = isCheck;
	}
}

function showItems(item){
	listItems.forEach
}

addButton.addEventListener('click', event => {
	if (enterVal.value == "") {
		alertBox.style.display = 'block';
		setTimeout(() => {
			alertBox.style.display = 'none';
		}, 5000); //after 5 seconds hide alert box
	} else {
		listItems[i] = new Todo_Item(enterVal.value,false);
		i++;
		localStorage.setItem(listItems,i); 
		addElement(enterVal.value);
		enterVal.value = "";
	}
});

operatDelete.addEventListener('click', item => {
	

});

function addElement(text) {
	let createLi = document.createElement('li');
	createLi.className = "todo-items";
	createLi.innerHTML = `
	<div class="todo-text">
		<p>${text}</p>
	</div>
	<div class="todo-operats">
		<div class="todo-operats-check">
			<i class="fa-solid fa-circle-check"></i>
		</div>
		<div class="todo-operats-edit">
			<i class="fa-solid fa-pen-to-square"></i>
		</div>
		<div class="todo-operats-delete">
			<i class="fa-solid fa-circle-minus"></i>
		</div>
	</div>
`;
	ulTodos.appendChild(createLi);
}

clsAlert.addEventListener('click', e => {
	alertBox.style.display = 'none';
});