// Call Stack Function in Javascript Asynchronous

// Here is example of Call Stack Function with Pythaghoras Math Formula
const Multiplier = (x,y) => x * y;
const RootMulti = x => Multiplier(x, x);
const Pythaghoras = (a,b,c) => {
    return RootMulti(a)+RootMulti(b) === RootMulti(c)
};
console.log(Pythaghoras(3,4,5));
// Result are true if 3 and 4
// You can visit this link for testing function
// https://pythontutor.com/

// Reason why Asynchronous Javascript its crucial for development
// It is to make your process code do less step or process
// So your application will not heavy due to memory usage of this code processing