// 1.

var coffee = {
	name: "Arabica",
	strength: "Strong",
	flavour: "Biter",
	milk: "Goat",
	sugar: "No sugar",
	size: "Short",
	package: "Cup",
	isCoffeeToGo: true,
	color: "Black",
	extra: "Cookey",
};

// 2.

var movie = {
	title: "Godfather",
	actors: ["Marlon Brando", "Al Pacino", "Robert de Niro", "Andy Garcia"],
	genre: "Crime/Drama",
	rating: 9.2,
	created: "1972 - 1990",
	oscars: 9,
	oscarNominations: 28,
	directedBy: "Francis Ford Coppola",
	music: "Nino Rota",
};

// 3.

function createObjects(description, lang, git, status) {
	var newObj = {
		description: description,
		language: lang,
		gitRepo: git,
		isActive: status,

		getRepo: function () {
			return git;
		},
		isProjectActive: function () {
			return status;
		},

		isLanguageJS: function () {
			if (
				lang.toLowerCase() === "js" ||
				lang.toLower() === "javascript"
			) {
				return true;
			}

			return false;
		},
	};

	return newObj;
}

// var newObject = createObjects("desc", "JS", "some git repo", false);

// console.log(newObject.getRepo()); // string

// console.log(newObject.isProjectActive()); // boolean

// console.log(newObject.isLanguageJS()); // boolean

// 4.

function createRecipe(name, type, complex = 1, ingredients, time, instruction) {
	var newObj = {
		name: name,
		cuisineType: type,
		complexity: complex,
		ingredientsList: ingredients,
		time: time,
		preparingInstruction: instruction,

		allIngredients: function () {
			for (var i = 0; i < this.ingredientsList.length; i++) {
				console.log(this.ingredientsList[i]);
			}
		},

		isFastPrep: function () {
			return this.time < 15 ? true : false;
		},

		changeCuisineType: function (newType) {
			this.cuisineType = newType;
		},

		deleteIngredient: function (ing) {
			var isDeleted = false;

			for (var i = 0; i < this.ingredientsList.length; i++) {
				if (ing === this.ingredientsList[i]) {
					delete this.ingredientsList[i];
					isDeleted = true;
					continue;
				}

				if (isDeleted) {
					this.ingredientsList[i - 1] = this.ingredientsList[i];
				}
			}

			if (isDeleted) {
				this.ingredientsList.length = this.ingredientsList.length - 1;
			}

			return this.ingredientsList;
		},
	};

	return newObj;
}

var obj = createRecipe(
	"Gulas",
	"kuvana jela",
	13,
	[
		"600 gr govedjeg mesa",
		"600 gr crnog luka",
		"250 ml soka od paradajza",
		"1 zlicica persuna",
		"1 zlicica bibera",
		"2 zlicice mlevene crvene paprike",
		"1 zlica vegete",
	],
	240,
	"lorem lotremsdffdsdl"
);

//obj.allIngredients();

// obj.changeCuisineType("srpska jela");
// console.log(obj.cuisineType);

// console.log(obj.isFastPrep());

obj.deleteIngredient("1 zlicica persuna");
obj.allIngredients();
