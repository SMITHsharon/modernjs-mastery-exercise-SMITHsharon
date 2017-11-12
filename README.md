# ModernJS Mastery Exercise

### Project Description 

This exercise was an in-class quiz on project-setup, basic jQuery, and Bootstrap features and functionality. 

#### MARVELJS
![MARVEL Page on Launch](https://raw.githubusercontent.com/SMITHsharon/modernjs-mastery-exercise-SMITHsharon/master/images/screenshots/on_click.png)

![MARVEL Page on Selecting Avengers]()

### Project Specs
#### Project Set-Up
- Cloned the project to local
- Completed project set-up: jQuaery, Bootstrap, Grunt
- The site launches with a large Marvel logo screen shot

#### Functionality (JavaScript, jQuery)
On click of a button in the navbar:
- The large Marvel goes away 
- The click event calls a function called `dataGetter` that has a `Promise.all`
- The `Promise.all` resolves three functions that get the data from the .json files
- `dataGetter` passes a SINGLE array to the `writeToDOM` function
- The `writeToDOM` function writes everything to the DOM
- If there is no description for a character, the description displays as follows:
	- A female character with no description displays a description of "abcde fghij klmno pqrst uvwxy z"
	- A male character with no description displays a description of "1234567890"

#### Bootstrap
- Navbar matches example in the specs, including Marvel logo for branch, and a button for each team in the teams.json file
- Each character displays in a bootstrap panel
- Each character's image displays in a circle with a border color of:
	- Blue if the character is Male
	- Pink if the character is Female
- There should be four panels in each row
- Each row has a bootstrap row class
- The Marvel Hex colors are:
	* Red = #e23636	
	* Black = #000000	
	* Gray = #504a4a	
	* Blue = #518cca	
	* Orange = #f78f3f

#### Overall Requirements
- No Grunt errors while running code
- ES6 (`let`, `const`, fat arrows)
- Uses `Promises` for ALL ajax calls
- No changes were made to the .json files

### Technologies Used
- `html`
- `JavaScript`
- `ES6`
- `jQuery`
- `Bootstrap`
- `Grunt`

### Contributor
[Sharon Smith](https://github.com/SMITHsharon)

