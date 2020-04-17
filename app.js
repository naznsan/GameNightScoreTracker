function Player(name) {
	this.name = name;
	this.scores = [2, 4, 5];
}

function addPlayer() {
	let playerName = document.getElementById("player-name").value;
	document.getElementById("player-name").value = "";
	console.log(playerName);
    playersList.push(new Player(playerName));
    populateTableNames();
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


function populateScores() {
	const table = document.getElementById("scores-table");
	for (let player of playersList) {
		let row = table.insertRow();
		if (player.scores.length == 0) {
			let cell = row.insertCell(0);
			cell.innerHTML = 0;
		} else {
			player.scores.forEach(score => {
				let cell = row.insertCell(0);
				cell.innerHTML = score;
			})			
		}
	}
}


var playersList = [];
playersList.push(new Player("Player1"));
playersList.push(new Player("Player2"));
playersList.push(new Player("Player3"));

populateTableNames();
populateScores();