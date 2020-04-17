function Player(name) {
	this.name = name;
	this.scores = [];
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
	})

}

var playersList = [];
playersList.push(new Player("Player1"));
playersList.push(new Player("Player2"));
playersList.push(new Player("Player3"));

populateTableNames();