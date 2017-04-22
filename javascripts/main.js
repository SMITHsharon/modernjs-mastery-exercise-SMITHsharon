
$(document).ready(function(){

let marvelChars = [];
let theseGuys = [];


$("#Men").click((event) => {
console.log($(event.currentTarget));

let id = $("#Men").attr('id');
console.log("marvelChars :: ", marvelChars);
console.log("id :: ", id);
// console.log("marvelChars.team_id :: ", marvelChars.team_id);

	dataGetter($("#Men").attr('id'));

  });


// creates array for just this team of Marvel characters
const dataGetter = (teamID) => {
console.log("gettingData");
	for (let i=2; i<=4; i++) {
		if (marvelChars[i].name.includes(teamID)) {
			let thisTeamID = i;
		}	
	}

	for (let i=5; i<marvelChars.length; i++) {
		if (marvelChars[i].team_id === thisTeamID) {
				theseGuys.push(marvelChars[i]);
			}
		}
	
	console.log("theseGuys :: ", theseGuys);
	writeToDOM(theseGuys);
};


// writes everything to DOM
const writeToDOM = (theseGuys) => {
console.log("writing to DOM");
	let domString = "";

	domString += ``;
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
console.log("genders data // what has happened to my data?");
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
console.log("teams data // what has happened to my data?");
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
console.log("characters data // what has happened to my data?");
				resolve(data.characters);
				// resolve(data);
			})
			.fail ((error) => {
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
console.log("marvelChars :: ", marvelChars);
		});
	})
	.catch( (error) => {
		console.log(error);
	});


});
