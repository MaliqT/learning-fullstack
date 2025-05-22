const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities =[];

// fetch from a source, returns a promise or what eventually will be sent back. Need to follow it up with a then() method which returns a bunch of random data or RAW data
// What this line of code does is:
// fetch a source from endpoint, returns a promise. From that promise, then() take the json method of RAW data, then() return the data and spread into cities array
fetch(endpoint).then(blob => blob.json().then(data => cities.push(...data)));

// Write a function that takes the array and create a subset of array of filtered suggestions of what has been typed
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // figure out if city or state matches what was typed
        const regex = new RegExp(wordToMatch, "gi");        // "gi" are the flags for this matching. g is global, i is insensitive meaning capital or lowercase.
        return place.city.match(regex) || place.state.match(regex);
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
        const stateName = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);