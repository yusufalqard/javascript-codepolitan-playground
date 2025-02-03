const DataTestRequest = new XMLHttpRequest();
let ReqData;

DataTestRequest.onload = function () {
    const ReqData = JSON.parse(this.responseText);
    console.log(ReqData);
};

DataTestRequest.onerror = function () {
    console.log('Error', this);
};

DataTestRequest.open('GET', 'https://swapi.dev/api/people/2');
DataTestRequest.send();