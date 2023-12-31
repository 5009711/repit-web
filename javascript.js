const addBtn = document.querySelector("button#submit");
const exerciseInput = document.querySelector("input#exercise");
const cards = document.querySelector("ul.cards");


class Exercise {
	constructor(name, minWeight=45, sets=[], muscleGroups) {
		this.name = name,
		this.minWeight = minWeight,
		this.sets = sets,
		this.muscleGroups = muscleGroups
	}

	get totalSets() {
		return this.calcSets();
	}

	get totalWeight() {
		return this.totalWeight();
	}

	get totalReps() {
		return this.totalReps();
	}

	calcSets() {
		return this.sets.length;
	}

	calcWeight() {
		let weight = 0;
		for (const set in sets) {
			weight += set['weight'];
		}
		return weight;
	}

	calcReps() {
		let reps = 0;
		for (const set in sets) {
			reps += set['reps'];
		}
		return reps;
	}
}

class Set {
	constructor(weight, reps) {
		this.weight = weight,
		this.reps = reps
	}

	get weight() {
		return this.weight;
	}

	get reps() {
		return this.reps;
	}

	addWeight(weight) {
		this.weight += weight;
	}

	addReps(reps) {
		this.reps += reps;
	}
}

class Workout {
	constructor(name, exercises=[]) {
		this.name = name,
		this.exercises = exercises
	}

	addExercise(exercise) {
		this.exercises.push(exercise);
	}
}

let workout = new Workout(name="default");
addBtn.addEventListener("click", addCard);

function addCard() {
	const exerciseInput = document.querySelector("input#exercise");
	console.log(exerciseInput.value);
	let newExercise = new Exercise(name=exerciseInput.value,
	muscleGroups=["chest"]);
	workout.addExercise(newExercise);
	updateCardList(newExercise);
	exerciseInput.value = "";
	exerciseInput.focus();
}

function updateCardList(exercise) {
	cards.appendChild(createCard(exercise));
}

function createCard(exercise) {
	const card = document.createElement("li");
	
	const leftCard = document.createElement("div");
	const rightCard = document.createElement("div");

	const text = document.createElement("div");
	const name = document.createElement("name");
	const weight = document.createElement("weight");
	const sets = document.createElement("sets");

	const weightsets = document.createElement("div");
	const weightInput = document.createElement("input");
	const setsInput = document.createElement("input");
	const repBtn = document.createElement("button");
	
	const controls = document.createElement("div");
	const detailsBtn = document.createElement("button");
	const removeBtn = document.createElement("button");
	
	removeBtn.addEventListener("click", (e) => {
		e.target.parentNode.parentNode.parentNode.remove();
	})

	repBtn.addEventListener("click", (e) => {
		let setsInput = e.target.previousElementSibling;
		let weightInput = setsInput.previousElementSibling;
		let textFields = e.target.parentNode.previousElementSibling;

		textFields.querySelector(".card-weight").textContent +=
		`${weightInput.value} `;
		textFields.querySelector(".card-sets").textContent += `${setsInput.value} `;

		weightInput.value = "";
		setsInput.value = "";
		weightInput.focus();
	});

	detailsBtn.textContent = "Details";
	removeBtn.textContent = "Remove";
	controls.classList.add("card-controls");
	controls.appendChild(detailsBtn);
	controls.appendChild(removeBtn);

	text.classList.add("card-text");	
	weight.textContent = "Weight: ";
	weight.classList.add("card-weight");
	sets.textContent = "Sets: ";
	sets.classList.add("card-sets");
	name.textContent = exercise.name;
	name.style.fontSize = "15px";
	name.style.fontWeight = "bold";
	weight.style.fontSize = sets.style.fontSize = "12px";
	text.appendChild(name);
	text.appendChild(weight);
	text.appendChild(sets);

	weightInput.setAttribute("type", "text");
	weightInput.setAttribute("placeholder", "Weight");
	weightInput.style.width = setsInput.style.width = "50px";
	setsInput.setAttribute("type", "text");
	setsInput.setAttribute("placeholder", "Reps");
	repBtn.textContent = "Log";
	weightsets.appendChild(weightInput);
	weightsets.appendChild(setsInput);
	weightsets.appendChild(repBtn);

	leftCard.appendChild(text);
	leftCard.appendChild(weightsets);
	leftCard.classList.add("left-card");

	rightCard.appendChild(controls);
	rightCard.classList.add("right-card");

	card.appendChild(leftCard);
	card.appendChild(rightCard);
	return card;
}





