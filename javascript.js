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
	const text = document.createElement("div");
	const controls = document.createElement("div");
	const detailsBtn = document.createElement("button");
	const removeBtn = document.createElement("button");
	
	removeBtn.addEventListener("click", (e) => {
		e.target.parentNode.parentNode.remove();
	})

	detailsBtn.textContent = "Details";
	removeBtn.textContent = "Remove";

	
	controls.classList.add("card-controls");
	controls.appendChild(detailsBtn);
	controls.appendChild(removeBtn);
	
	text.textContent = exercise.name;

	card.appendChild(text);
	card.appendChild(controls);
	return card;
}





