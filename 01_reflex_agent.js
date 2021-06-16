// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state) {
	if (state == "DIRTY") return "CLEAN";
	else if (location == "A") return "RIGHT";
	else if (location == "B") return "LEFT";
}

function test(states) {
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

	let random = Math.trunc(getRandom(1, 8));
	console.log(random);

	switch (random) {
		case 1:
			state.A = 'DIRTY';
			if(states[2] != 'DIRTY'){
				state.B = 'CLEAN';
			}

			break;
		case 2:
			if(states[1] != 'DIRTY'){
				state.A = 'CLEAN';
			}
			state.B = 'DIRTY'
			break;
		case 3:
			state.A = 'DIRTY';
			state.B = 'DIRTY';
			break;
		default:
			break;
	}

	return state;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var states = ["A", "DIRTY", "DIRTY"];
test(states);
