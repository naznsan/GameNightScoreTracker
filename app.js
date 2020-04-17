function Player(name) {
	this.name = name;
	this.scores = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
}

function addPlayer() {
	let playerName = document.getElementById("player-name").value;
	document.getElementById("player-name").value = "";
	console.log(playerName);
    playersList.push(new Player(playerName));

    populateTableNames();
    populateTableScores();
    return playersList;
}

function addScore(name, score) {
    playersList.forEach(player => {
        if (player.name == name) {
            player.scores.push(score);
        };
    });
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
			player.scores.forEach(score => {
				row.innerHTML += '<td class="score-' + player.name + '">' + score + '</td>';
			})			
		}
	}
}

function makeEditable() {
	let x = document.getElementById("scores-table").rows.length;
	console.log(x);
}


var playersList = [];
playersList.push(new Player("Player1"));
playersList.push(new Player("Player2"));
playersList.push(new Player("Player3"));

populateTableNames();
populateTableScores();
makeEditable();