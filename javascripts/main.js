
$(document).ready(function(){
// my project-setup all messed up :(
// tried to fix when realized
// wasted time on that, got messed up even more


$("#my-button").click((event) => {
    console.log($(event.currentTarget));
    
  });

let marvelChars = [];


const dataGetter = (marvelChars) => {
console.log("gettingData");
};


// writes everything to DOM
const writeToDOM = (marvelChars) => {
console.log("writing to DOM");
	let domString = "";

	domString += ``;
	for (let i = 0; i < humanArray.length; i++) {
		domString += `<div class="row">`;
		domString += `<div class="col-sm-3">`;
		domString += ``;
		domString += `</div>`;
		domString += `</div>`;
	} // for
};


// Promise.all resolves 3 functions that get the data from the json files
const loadGenders = () => {
		return new Promise((resolve, reject) => {
			$.ajax("./db/genders.json")
			.done ((data) => {
console.log("genders data :: ", data);
				resolve(data.genders);
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
		});
	})
	.catch( (error) => {
		console.log(error);
	});















});
