// Using XMLHttpRequest method

// const DataTestRequest = new XMLHttpRequest();
// let ReqData;

// DataTestRequest.onload = function () {
//     const ReqData = JSON.parse(this.responseText);
//     console.log(ReqData);
// };

// DataTestRequest.onerror = function () {
//     console.log('Error', this);
// };

// DataTestRequest.open('GET', 'https://swapi.dev/api/people/2');
// DataTestRequest.setRequestHeader('Accept','application/json');
// DataTestRequest.send();

// Using Fetch method
fetch("https://swapi.dev/api/people/3")
  .then((res) => {
    if (!res.ok) {
      throw Error("Could not fetch the data for that resource");
    }
    return res.json();
  })
  .then((data) => {
    console.log("1st JSON", data);
    return fetch("https://swapi.dev/api/people/4");
  })
  .then((res) => {
    console.log("2nd JSON");
    if (!res.ok) {
      throw Error("Could not fetch the data for that resource");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("error", err);
  });
