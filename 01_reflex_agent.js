const quantities = [0,0,0,0,0,0,0,0];

function reflex_agent(location, state) {
	if (state == "DIRTY") return "CLEAN";
	else if (location == "A") return "RIGHT";
	else if (location == "B") return "LEFT";
}

function test(states) {

	console.log(states);
	let done = addState(states);

	if(done){
		alert("All states where visited equal or more than twice.");
		return;
	}

	var location = states[0];
	var state = states[0] == "A" ? states[1] : states[2];
	var action_result = reflex_agent(location, state);
	document.getElementById("log").innerHTML += "<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
	if (action_result == "CLEAN") {
		if (location == "A") states[1] = "CLEAN";
		else if (location == "B") states[2] = "CLEAN";
	}
	else if (action_result == "RIGHT") states[0] = "B";
	else if (action_result == "LEFT") states[0] = "A";
	let newState = ensuciar(states);

	states[1] = newState.A;
	states[2] = newState.B;

	setTimeout(function () { test(states); }, 2000);
}

function ensuciar(states) {
	var state = {
		A: '',
		B: ''
	}

	let random = Math.trunc(getRandom(1, 7));

	switch (random) {
		case 1:
			state.A = 'DIRTY';
			state.B = states[2]
			break;
		case 2:
			state.A = states[1]
			state.B = 'DIRTY'
			break;
		case 3:
			state.A = 'DIRTY';
			state.B = 'DIRTY';
			break;
		default:
			state.A = states[1]
			state.B = states[2]
			break;
	}

	return state;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

const addState = (states) => {
	var element;
	switch (`${states[0]}|${states[1]}|${states[2]}`) {
		case 'A|DIRTY|DIRTY':
			element = document.getElementById('quantity-1');
			element.textContent = Number(element.textContent) + 1;
			quantities[0] = quantities[0] + 1;
			break;
		case 'B|DIRTY|DIRTY':
			element = document.getElementById('quantity-2');
			element.textContent = Number(element.textContent) + 1;
			quantities[1] = quantities[1] + 1;
			break;
		case 'A|DIRTY|CLEAN':
			element = document.getElementById('quantity-3');
			element.textContent = Number(element.textContent) + 1;
			quantities[2] = quantities[2] + 1;
			break;
		case 'B|DIRTY|CLEAN':
			element = document.getElementById('quantity-4');
			element.textContent = Number(element.textContent) + 1;
			quantities[3] = quantities[3] + 1;
			break;
		case 'A|CLEAN|DIRTY':
			element = document.getElementById('quantity-5');
			element.textContent = Number(element.textContent) + 1;
			quantities[4] = quantities[4] + 1;
			break;
		case 'B|CLEAN|DIRTY':
			element = document.getElementById('quantity-6');
			element.textContent = Number(element.textContent) + 1;
			quantities[5] = quantities[5] + 1;
			break;
		case 'A|CLEAN|CLEAN':
			element = document.getElementById('quantity-7');
			element.textContent = Number(element.textContent) + 1;
			quantities[6] = quantities[6] + 1;
			break;
		case 'B|CLEAN|CLEAN':
			element = document.getElementById('quantity-8');
			element.textContent = Number(element.textContent) + 1;
			quantities[7] = quantities[7] + 1;
			break;
	}

	let done = true;
	for(let q of quantities){
		if(q < 2){
			done = false;
		}
	}

	return done;

}

var states = ["A", "DIRTY", "DIRTY"];
test(states);
