function Player(name) {
	this.name = name;
	this.scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	this.changeScore = function(newScore, index) {
		this.scores[index] = parseInt(newScore);
		return this.scores;
	}
}



function addPlayer() {
	let playerName = document.getElementById("player-name").value;
	document.getElementById("player-name").value = "";
	if (playerName.length === 0) {
		alert("Player names must be atleast one character!");
		return;
	}
	console.log(playerName);
    playersList.push(new Player(playerName));

    populateTableNames();
    populateTableScores();
    calculateTotals();
    return playersList;
}

function getTotal(name) {
	let sum = 0;
    playersList.forEach(player => {
        if (player.name == name) {
            player.scores.forEach(score => sum += score);
            console.log(sum);
        } 
    });
    return sum;
}

function populateTableNames() {
	const table = document.getElementById("names-table");
	table.innerHTML = ""; // Clear the table first
	playersList.forEach(player => {
		let row = table.insertRow();
		let cell = row.insertCell(0);
		cell.innerHTML = player.name;
	});
}

function populateTableScores() {
	const table = document.getElementById("scores-table");
	table.innerHTML = "";
	for (let player of playersList) {
		let row = table.insertRow();
		if (player.scores.length == 0) {
			let cell = row.insertCell(0);
			cell.innerHTML = 0;
		} else {
			for (let i = 0; i < player.scores.length; i++) {
				row.innerHTML += '<td id="cell-' + (i) + '" class = "score-' + player.name + '" onClick="makeEditable(this.id, this.className)">' + player.scores[i] + '</td>';
			}		
		}
	}
}

function calculateTotals() {
	const table = document.querySelector("#totals-table");
	table.innerHTML = "";
	playersList.forEach(player => {
		let sum = 0;
		player.scores.reduce((total, value) => sum += value);
		let row = table.insertRow();
		let cell = row.insertCell(0);
		cell.innerHTML = sum;
	});
}

function makeEditable(inputID, elementClass) {
	let elementID = inputID.slice(5);
	let clickedCell = document.querySelector("#" + inputID + "." + elementClass);
	let valCurr = clickedCell.innerHTML;
	clickedCell.innerHTML = `<input type="number" value="${valCurr}" min="0" onblur="makeNonEditable('${inputID}', '${elementClass}')"></input>`;
	clickedCell.setAttribute("onClick", null);
}

function makeNonEditable(inputID, elementClass) {
	let blurredCell = document.querySelector(`#${inputID}.${elementClass}`);
	let valNew = blurredCell.firstElementChild.value;

	let cellIndex = inputID.slice(5);
	let playerName = elementClass.slice(6);

	playersList.forEach(player => {
		if (player.name == playerName) {
			player.changeScore(valNew, cellIndex);
		}
	});

	populateTableScores();
	calculateTotals();
}


var playersList = [];
//playersList.push(new Player("Player1"));
//playersList.push(new Player("Player2"));
//playersList.push(new Player("Player3"));

populateTableNames();
populateTableScores();
calculateTotals();