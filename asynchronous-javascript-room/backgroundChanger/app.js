// Initialize backgroundChanger script
const delayColorChange = (color, delay) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

delayColorChange('red',1000)
    .then(() => delayColorChange('yellow',1000))
    .then(() => delayColorChange('green',1000))
    .then(() => delayColorChange('blue',1000))
    .then(() => delayColorChange('purple',1000))
    .then(() => delayColorChange('magenta',1000));