// Initialize backgroundChanger script
const delayColorChange = (color, delay) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

// delayColorChange('red',1000)
//     .then(() => delayColorChange('yellow',1000))
//     .then(() => delayColorChange('green',1000))
//     .then(() => delayColorChange('blue',1000))
//     .then(() => delayColorChange('purple',1000))
//     .then(() => delayColorChange('magenta',1000));

// Async and Await on Asynchronous Javascript

// Async function works automatic when any changes happen on Promise call function
// Here is the logic
// If we have data function, then we can resolve by sending data
// or even we can processing data at same time
// If we have function that contain object throw erro inside of callback function
// then we can sending reject promise to notified users about this

// Await function works same as Async
// But the difference is "Await" keyword only works if we have Async function
// Any other Async function will not work as intended
// Await always have delay process until next function assigned
// By waiting and running Await until Async function resolved 

// Here is the example of Async and Await of callback function
async function changeColor () {
    await delayColorChange('red',1000);
    await delayColorChange('yellow',1000);
    await delayColorChange('green',1000);
    await delayColorChange('blue',1000);
    await delayColorChange('purple',1000);
    await delayColorChange('magenta',1000);
    return 'All color changes success';
}

async function printRainbow (){
    await changeColor();
    console.log('All Process Done! Function printRainbow process executed')
}
printRainbow();