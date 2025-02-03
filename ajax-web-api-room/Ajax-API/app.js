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
// fetch("https://swapi.dev/api/people/3")
//   .then((res) => {
//     if (!res.ok) {
//       throw Error("Could not fetch the data for that resource");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log("1st JSON", data);
//     return fetch("https://swapi.dev/api/people/4");
//   })
//   .then((res) => {
//     console.log("2nd JSON");
//     if (!res.ok) {
//       throw Error("Could not fetch the data for that resource");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// Using Async Method

// const LoadDataPeople = async () => {
//     try {
//     const res = await fetch('https://swapi.dev/api/people/5');
//     const data = await res.json();
//     console.log(data);

//     const res2 = await fetch('https://swapi.dev/api/people/6');
//     const data2 = await res2.json();
//     console.log(data2);
//     } catch (err){
//         console.log('error',err);
//     }
// };

// LoadDataPeople();

// Using Axios method
// Introduction Axios
// axios
//     .get('https://swapi.dev/api/people/7')
//     .then((res)=> {
//         console.log(res.data);
//     })
//     .catch((err)=>{
//         console.log(err);
//         alert(err.message);
//     });

const DataPeople = async (id) => {
	try {
		const res = await axios.get(`https://swapi.dev/api/people/${id}`);
		console.log(res.data);
	} catch (error) {
		console.log(error);
		console.log(error.message);
		console.log(error.response.status);
		console.log(error.response.data);
	}
};