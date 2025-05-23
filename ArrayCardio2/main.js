const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 }
];

const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 }
];

// Some and Every checks
// Array.prototype.some() : Check if at least one thing in the array meets the criteria
const isAdult = people.some(function(person) {
    const currentYear = (new Date().getFullYear());

    if (currentYear - person.year >= 19) {
        return true;
    }
});

// Or like this:
const isAdult = people.some(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
});

// Or like this:
const isAdult = people.some(person => (new Date()).getFullYear - person.year >= 19);






// Array.prototype.every() : Checks if every single item in the array meets the criteria
// Basically follow the same layout of Array.prototype.some() but replace some() with every()
const allAdults = people.every(person => (new Data()).getFullYear - person.year >= 19);






// Array.prototype.find() : Looks for the FIRST occurrence or appearance of an item in the array and returns that single item.
// If there are multiple instances, again it only returns the first one that appears.

const comment = comments.find(function(comment) {
    if (comment.id === 823423) {
        return true;
    }
});

// Or like this:
const comment = comments.find(comment => {
    return comment.id === 823423;
});

// Or like this:
const comment = comments.find(comment => comment.id === 823428);


// Array.prototype.findIndex() : find where something is inside of the array. So finds the location/index of the item in the array
const index = comments.findIndex(comment => comment.id === 823428);

// How to delete once you have index?
comments.splice(index, 1);

// or create a new array if you want to keep the original array
const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];