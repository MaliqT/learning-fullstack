const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];

    // filtering: Pass in a function and loops over every single item in array or data structure
    // take inventors, filter through each of them and run the function for each item that checks birth year
    const fifteen = inventors.filter(function(inventor) {
        if (inventor.year >= 1500 && inventor.year <= 1599) {
            return true;
        }
    });


    // map array of first and last names: Takes an array, does a function and returns a NEW array of same length. Will always return the same amount of items.
    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

    // sort inventors by birthday, oldest to youngest. Self explanatory on how sorting works.
    const ordered = inventors.sort(function(a, b) {
        if (a.year > b.year) {
            return 1;
        }
        else {
            return -1;
        }
    });

    // Or similarly:
    const orderedTernary = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

    // reducing: Allow to build something on every item. How many years did all the inventors live?
    const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0);      // Adding the 0 here is important because the reduce function will automatically use the first parameter as the starting value. As "total" is undefined, our expected value will be inconsistent. Add a 0 afterwards sets the initial value to start at 0. Only the first parameter can be initialized a value. 


    // Sort inventors by years lived. Not total this time
    const oldest = inventors.sort(function(a, b) {
        const lastGuy = a.passed - a.year;
        const nextGuy = b.passed - b.year;
        return lastGuy > nextGuy ? -1 : 1;
    });


    // Based on the link below, create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    const category = document.querySelector(".mw-category");                // Find out the container element that holds the links/text that we want
    const links = Array.from(category.querySelectorAll("a"));               // We get a nodeList so parse that into an Array and select all the links/containers for the text
    const de = links                                                        // map out the textContent of the container element
                .map(link => link.textContent)
                .filter(streetName => streetName.includes("de"));           // Then filter all textContent based on filter option


    // Now sort the people alphabetically by last name
    const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');

        return aLast > bLast ? 1 : -1;
    });


    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ]

    // Sum up the isntances of each data
    const transportation = data.reduce(function(obj, item) {
        if (!obj[item]) {
            obj[item] = 0;
        }

        obj[item]++;

        return obj;
    }, {})