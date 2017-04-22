
$(document).ready(function(){

let marvelChars = [];


// event handlers for button clicks
$("#Men").click((event) => {
	dataGetter($("#Men").attr('id'));
  });

$("#Avengers").click((event) => {
	dataGetter($("#Avengers").attr('id'));
  });

$("#Guardians").click((event) => {
	dataGetter($("#Guardians").attr('id'));
  });


// creates array for just this team of Marvel characters
const dataGetter = (teamID) => {

	let theseGuys = [];
	let thisTeamID = -1;

	for (let i=2; i<=4; i++) {
		if (marvelChars[i].name.includes(teamID)) {
			thisTeamID = marvelChars[i].id;
		}	
	}

	for (let i=5; i<marvelChars.length; i++) {
		if (marvelChars[i].team_id === thisTeamID) {
				theseGuys.push(marvelChars[i]);
		}
	}
	
	writeToDOM(theseGuys);
};


// writes everything to DOM for this team of Marvel characteres
const writeToDOM = (theseGuys) => {
console.log("theseGuys :: ", theseGuys);
	let domString = "";

	// domString += ``;
	for (let i = 0; i < theseGuys.length; i++) {
		domString += `<div class="row">`;
		domString += `<div class="col-sm-3">`;
		domString += `<"${theseGuys[i].name}">`;
		domString += `<img src="${theseGuys[i].image}">`;
		if (theseGuys[i].description !== "") {
			domString += `"${theseGuys[i].description}"`;
		} else {
			domString += `${getDesc(theseGuys[i])}"`;
		}
		domString += `</div>`;
		domString += `</div>`;
	} // for

	outputContainer.append(domString);
};


// write stock Description if there is none given
const getDesc = (thisGuy) => {
	if (thisGuy.gender_id === 0) {
		// female
		return "abcde fghij klmno pqrst uvwxy z";
	} else {
		return "1234567890";
	}
};



// Promise.all resolves 3 functions that get the data from the json files
const loadGenders = () => {
		return new Promise((resolve, reject) => {
			$.ajax("./db/genders.json")
			.done ((data) => {
				resolve(data.genders);
				// resolve(data);
			})
			.fail ((error) => {
				reject(error);
			});
		});
	};

	const loadTeams = () => {
		return new Promise((resolve, reject) => {
			$.ajax("./db/teams.json")
			.done ((data) => {
				resolve(data.teams);
				// resolve(data);
			})
			.fail ((error) => {
				reject(error);
			});
		});
	};

	const loadCharacters = () => {
		return new Promise((resolve, reject) => {
			$.ajax("./db/characters.json")
			.done ((data) => {
				resolve(data.characters);
				// resolve(data);
			})
			.fail ((error) => {
				console.log("character error", error);
				reject(error);
			});
		});
	};


Promise.all([loadGenders(), loadTeams(), loadCharacters()])
	.then(function(result){
		result.forEach( (xhrResult) => {
			xhrResult.forEach( (charItem) => {
				marvelChars.push(charItem);
			});
		});
	})
	.catch( (error) => {
		console.log(error);
	});


});
