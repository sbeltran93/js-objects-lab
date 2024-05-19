const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  

  // console.dir(pokemon, { maxArrayLength: null })
  // console.log(game)


  /*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?
*/
/*
  difficulty: [
    {level: "Easy"},
    {level: "Med"},
    {level: "Hard"},
  ],
}
// game.difficulty = ["Easy", "Med", "Hard"]
*/
// Solve Exercise 3 here:

game.difficulty = [
    {level: "Easy", score: 25 },
    {level: "Med", score: 50 },
    {level: "Hard", score: 75 },
]
// console.log(difficulty)

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?



Solve Exercise 4 here:
*/
// PUSH METHOD, BRACKET 3 IS A STARTER




game.party = [[ { number: 4, name: "Charmander", type: "fire", hp: 39, starter: true },
]];

console.log(game)


/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
/*
game.party = [
  ['Charmander'], ['Jigglypuff'] , ['Psyduck'], ['Snorlax']
]
*/


  game.party.push = [

  { number: 4, name: "Charmander", type: "fire", hp: 39, starter: true},
  { number: 39, name: "Jigglypuff", type: "normal", hp: 115, starter: false },
  { number: 54, name: "Psyduck", type: "water", hp: 50, starter: false },
  { number: 143, name: "Snorlax", type: "normal", hp: 160, starter: false },
];

console.log(game)

// const party [ Jigglypuff, Psyduck, Snorlax ]; 
// console.log(party)



/*
Exercise 6
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 6 here:
*/

const party = [hp]
  party.sort(hp);
    console.log(party)



/*
Exercise 7
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 7 here: 
*/
