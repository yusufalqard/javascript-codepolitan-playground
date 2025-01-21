// START SECTION of Callback Function and Array Method in Javascript

// For Each in Javascript
// Can be used as Callback Function that Retrieve some function as many element in array has
const BoxDonut = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
BoxDonut.forEach(function (DonutElement) {
  if (DonutElement % 2 === 0) {
    console.log(DonutElement);
  }
});
// This function will show even number in BoxDonut array
// It will show 2, 4, 6, 8, 10 in console.log(DonutElement);
const MovieList = [
    {
        titleMovie: "Snowden",
        rating : 73,
    },
    {
        titleMovie: "Terminator 3: Rise of the Machines",
        rating : 78,
    },
    {
        titleMovie: "Fast & Furious Tokyo Drift",
        rating : 81,
    },
];
MovieList.forEach(function (MovieElement) {
    console.log(`${MovieElement.titleMovie} - ${MovieElement.rating}/100`);
});
// Result will show in console as:
// Snowden - 73/100
// Terminator 3: Rise of the Machines - 78/100
// Fast & Furious Tokyo Drift - 81/100
