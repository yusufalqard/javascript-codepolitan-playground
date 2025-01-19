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