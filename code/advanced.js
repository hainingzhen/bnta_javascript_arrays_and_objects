/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */


unitedKingdom = [
    {
        name: "Scotland",
        capital: "Edinburgh",
        population: 5454000,
        touristAttractions: [
            "Stirling Castle",
            "Loch Ness"
        ]
    },
    {
        name: "England",
        capital: "London",
        population: 55980000
    },
    {
        name: "Wales",
        capital: "Swansea",
        population: 3163000,
        touristAttractions: [
            "Snowdonia"
        ]
    },
    {
        name: "Northern Ireland",
        capital: "Belfast",
        population: 1885000,
        touristAttractions: [
            "Titanic Museum",
            "Giant's Causeway"
        ]
    }
]


/**
 * Q1. Add some tourist attractions to England
 */

unitedKingdom[unitedKingdom.findIndex(place => place.name === "England")].touristAttractions = ["Big Ben", "Tower of London"];
console.log(unitedKingdom);



/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

unitedKingdom[unitedKingdom.findIndex(place => place.name === "Wales")].capital = "Cardiff";
console.log(unitedKingdom);



/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

northernIrelandKeys = Object.keys(unitedKingdom[unitedKingdom.findIndex(place => place.name === "Northern Ireland")]);
console.log(northernIrelandKeys);



/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */

unitedKingdom.sort((place1, place2) => place1.population > place2.population ? -1 : 1);
console.log(unitedKingdom);
console.log(unitedKingdom[0].name === "Scotland" ? "Biggest" : unitedKingdom[unitedKingdom.length - 1].name === "Scotland" ? "Smallest" : "Somewhere in the middle");