// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
// }

const createInstructor = (firstName, lastName) => ({
    firstName,
    lastName
})


// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

const instructor = (firstName, favoriteNumber, val) => ({
    firstName,
    [favoriteNumber] : val
})


// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
// }

const instructorFunctionObject = {
    firstName : "Vera",
    sayHi() {
        return "Hi!";
    }, 
    sayBye() {
        return `${this.firstName} says Bye!`;
    },    
}


// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

const createAnimal = (species, verb, noise) => ({
    species,
    [verb]() {
        return noise;
    }
})