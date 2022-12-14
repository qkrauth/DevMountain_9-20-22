// Given a number n, return an array containing n unique random numbers 1-10. dont repeat numbers
// Write your code below this line.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function randomizer(n) {
    for (let i = 0; i < n; i++) {
        return array[i];
    }
}
console.log(randomizer(5));


// Solution
function randomizer1(n) {
    let lucky_set = new Set();
    while(lucky_set.size < n) {
        lucky_set.add(Math.floor(Math.random() * 10) + 1)
    }
    return Array.from(lucky_set);
}
console.log(randomizer1(6));


// Notes 9/20/22
// Declare the object variable
let pikachu = {
    name: "Pikachu",
    species: "Mouse",
    canEvolve: true,
    orderNumber: 25,
    moves: ["thundershock", "tackle"],
    evolutions: {
        first: "Pichu",
        middle: "Pikachu",
    }
}
console.log(pikachu.name);
// or
console.log(pikachu["name"]);
// add or reassign values too 
pikachu["suprised"] = ":O";
console.log(pikachu);



// SCALE THE ARRAY - given an array arr and a number num, multiply all values in the array arr by the number num and and return
// the changed array arr. for example scaleArray([1,2,3], 3) should return [3,6,9]

function scale_array(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}
console.log(scale_array([1, 2, 3], 3));