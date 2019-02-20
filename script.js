// /* Object containing all the scripts
//  * Each decision is assigned a unique ID and an object containing the result text and the IDs for the next choices
//  * If the length of the IDs array is 0, then the path is a terminating path
// */
const storyScripts = {
	"B": {
		choiceText: "Proceed Forward",
		resultText: "You continue down the narrow, dark pathway until you reach a marble pillar.",
		nextChoices: ["C", "D"]
	},
	"C": {
		choiceText: "Go left",
		resultText: "You fall down a tunnel and slam your head hard on the smooth rock walls. You can see a light in the distance.",
		nextChoices: ["E", "F"]
	},
	"D": {
		choiceText: "Go right",
		resultText: "The right path leads to an icy walkway. The ice cracks from the weight of your body. You fall into the ice-cold abyss below and drown. Refresh to see more paths.",
		nextChoices: []
	},
	"E": {
		choiceText: "Go towards the light",
		resultText: "You see a strange bonsai tree with a box of matches. The bonsai twists into an odd spiral shape. Burn the bonsai tree?",
		nextChoices: ["G", "H"]
	},
	"F": {
		choiceText: "Go away from the light",
		resultText: "You see a strange bonsai tree with a box of matches. The bonsai twists into an odd spiral shape. Burn the bonsai tree?",
		nextChoices: ["G", "H"]
	},
	"G": {
		choiceText: "Burn the tree",
		resultText: "The tree instantly ignites and bursts into flames. Within seconds the dancing orange waves are replaced with whispy grey feathers.",
		nextChoices: ["J", "K"]
	},
	"H": {
		choiceText: "Do not burn the tree",
		resultText: "The light mist on the leaves sparkles. You continue walking through the tunnel until you come upon fountain with water. You are very thirsty.",
		nextChoices: ["I", "L", "M"]
	},
	"I": {
		choiceText: "Drink the water",
		resultText: "Drinking the water quenches your thirst. You feel much better now.",
		nextChoices: ["O"]
	},
	"J": {
		choiceText: "Go left",
		resultText: "The tunnel suddenly collapses over you. You are instantly crushed by rocks. Refresh to see more paths.",
		nextChoices: []
	},
	"K": {
		choiceText: "Go right",
		resultText: "You now end up in a large cirular room. In the center of the room is a single square table with a Rubik's cube. The Rubik's cube is almost solved. The top layer is turned 90º off.",
		nextChoices: ["P", "R"]
	},
	"L": {
		choiceText: "Jump into the fountain",
		resultText: "Your clothes are now wet. Even your socks.",
		nextChoices: ["O"]
	},
	"M": {
		choiceText: "Do not drink the water",
		resultText: "You continue walking, however, you find that eventually you cannot continue going. You collapse from dehydration. Refresh to see more paths.",
		nextChoices: []
	},
	"O": {
		choiceText: "Keeping going down the tunnel",
		resultText: "You now end up in a large cirular room. In the center of the room is a single square table with a Rubik's cube. The Rubik's cube is almost solved. The top layer is turned 90º off.",
		nextChoices: ["P", "R"]
	},
	"P": {
		choiceText: "Solve the Rubix cube",
		resultText: "After turning the cube, everything goes dark. You black out and wake up in the maze.",
		nextChoices: ["S"]
	},
	"R": {
		choiceText: "Do not touch the cube",
		resultText: "You see that behind the table, there is an opening out of the room. You continue forward. At last, you are out of the cave. The light encompasses the room and everything turns white.",
		nextChoices: ["U"]
	},
	"S": {
		choiceText: "Proceed Forward",
		resultText: "You walk forward and see the bonsai tree. The box of matches sits next to the tree.",
		nextChoices: ["T"]
	},
	"T": {
		choiceText: "Proceed Forward",
		resultText: "You see a solved rubix cube sitting on the same table in the exact same room. You trip and accidentally touch the cube. Everything goes white.",
		nextChoices: ["U"]
	},
	"U": {
		choiceText: "Wake up",
		resultText: "You open your eyes and see the maze in front of you. You can't remember anything.",
		nextChoices: ["B"]
	},
	"V": {
		choiceText: "This is F",
		resultText: "Something happens (F)",
		nextChoices: ["C", "D", "E"]
	},
	"W": {
		choiceText: "This is F",
		resultText: "Something happens (F)",
		nextChoices: ["C", "D", "E"]
	},
	"X": {
		choiceText: "This is F",
		resultText: "Something happens (F)",
		nextChoices: ["C", "D", "E"]
	},
	"Y": {
		choiceText: "This is F",
		resultText: "Something happens (F)",
		nextChoices: ["C", "D", "E"]
	},
	"Z": {
		choiceText: "This is F",
		resultText: "Something happens (F)",
		nextChoices: ["C", "D", "E"]
	}
}

// /* Generate the buttons to allow player to make decisions
//  * buttonNames is an array containing the various options
//  */
function generateOptions(buttonNames) {
	let len = buttonNames.length;
	$("footer").html("");
	for (let i = 0; i < len; i++) {
		let optionText = storyScripts[buttonNames[i]].choiceText;
		console.log(buttonNames, i);
		$("footer").append(`<div id="${buttonNames[i]}" class="gameOption four columns">${optionText}</div>`);
		$("#" + buttonNames[i]).on("click", optionHandler);
	}
}

function displayText(key) {
	console.log(key);
	$("#display").html(storyScripts[key].resultText);
}


function optionHandler() {
	currentLetter = $(this).attr("id");
	displayText(currentLetter);
	generateOptions(storyScripts[currentLetter].nextChoices);
}

$("#B").on("click", function() {
	currentLetter = $(this).attr("id");
	$("#display").html(storyScripts.B.resultText);
	console.log(currentLetter);
	generateOptions(storyScripts[currentLetter].nextChoices);
});


