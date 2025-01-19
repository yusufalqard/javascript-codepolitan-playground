// Object Data in Javascript
// Here is the example of object data

const Heartbeat = {
    Pulse : 125,
    BloodPressure : 70,
    Activity_Level : 30,
    BadCondition : false,
    DataPerson : ['159cm','55kg','Male'],
};
console.log(Heartbeat);

// If you want create more than 1 data, the prompt should be like this
// const NameFunction = {
// ObjectName : 'insert something here' and coma (,)
// ObjectName : Number,
// };

// It also support with Array, Boolean, etc
console.log(Heartbeat.Pulse);
console.log(Heartbeat.BloodPressure);
console.log(Heartbeat.Activity_Level);
console.log(Heartbeat.BadCondition);
console.log(Heartbeat.DataPerson);
// This is right way to receive object data in javascript
console.log(Heartbeat['DataPerson']);
// This is wrong way to received object data in javascript
// In Unorthodox way, this way used only in Array which not recommended to use this method
// Array and Object has own their usage for development app

// Add property inside of object data
Heartbeat.Assurance = 'Tressler'
console.log(Heartbeat);

// How to called function of Array and Object Data at once
const Checkout = [
    {
        Product : 'Milk',
        Price : 10,
        Discount : true
    },
    {
        Product :  'Noodles',
        Price : 15,
        Discount : false
    },
    {
        Product : 'Snacks',
        Price : 20,
        Discount : false
    },
];
console.log(Checkout);
console.log(Checkout[2]);
// This is how you can call function object inside array
console.log(Checkout[1].Product);
console.log(Checkout[1]['Discount']);
// You can call specific object inside array with this
// It also depends how developer read the code from tutorial or work project
// Use on situational condition to make everyone can read your code as well