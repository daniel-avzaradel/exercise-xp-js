// ----- EXERCISE 1 ----- //


let x = 17;
let y = 17;

if (x > y) {
    console.log("X is bigger than Y");
} else if (x == y) {
    console.log("X equals Y")
} else {
    console.log("Y is bigger than X");
}

// the same can be written as the following: //

x > y ? console.log("X is bigger than Y") : x == y ? console.log("X equals Y") : console.log("Y is bigger than X");


// ----- EXERCISE 2 ----- //

let newDog = "Chihuahua";
let letters = newDog.length;
console.log(letters);
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if (newDog == "Chihuahua") {
    console.log("I love Chihuahuas, it’s my favorite dog breed")
} else { console.log ("I dont care, I prefer cats")
}

// ----- EXERCISE 3 ----- //


function checkNum() {
    let checkNum = parseInt(prompt("Please enter a number"));

    if (checkNum%2 === 0) {
        console.log(checkNum + " is an EVEN Number");
    } else if (checkNum%2 !== 0 && checkNum%2 >= 1) {
        console.log(checkNum + " is an ODD Number")
    }
}

// ----- EXERCISE 4 ----- //

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}


// What is the returned value when moveCommand("forward")?
    // undefined, break was written before the return.


// What is the returned value when moveCommand("back")
    //you arrived home

// What is the returned value when moveCommand("right")
    // you found a river

// What is the returned value when moveCommand("left")
    // undefined, break was written before the return.


// ----- EXERCISE 5 ----- //

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]

if (users.length == 0) {
    console.log("no one is online")
} else if (users.length == 1) {
    console.log(`${users[0]} is online.`);
} else if (users.length == 2) {
    console.log(`${users[0]} and ${users[1]} are online.`)
} else if (users.length >= 3) {
    let online = users.length - 2;
    console.log(`${users[0]}, ${users[1]} and ${online} more are online.`)
}