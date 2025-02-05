// Promise Function in Asynchronous Javascript

// Callback Version
const requestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure(`Error: Connection Timeout`);
    } else {
      success(`Success: ${url}(${delay}ms)`);
    }
  }, delay);
};

// Promise version
const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 3000) {
        reject(`Error: Connection Timeout`);
      } else {
        resolve(`Success: ${url}(${delay}ms)`);
      }
    }, delay);
  });
};

// Example about callback function
// requestCallback('movie.com', function(response){
//   console.log(`success`,response);  
// },
// function(error){
//   console.log(`error`, error);
// });

// Exampe why developer not using callback function

// requestCallback(
// 	'movie.com',
// 	function (response) {
// 		console.log('success', response);
// 		requestCallback(
// 			'movie.com',
// 			function (response) {
// 				console.log('success', response);
// 				requestCallback(
// 					'movie.com',
// 					function (response) {
// 						console.log('success', response);
// 						requestCallback(
// 							'movie.com',
// 							function (response) {
// 								console.log('success', response);
// 								requestCallback(
// 									'movie.com',
// 									function (response) {
// 										console.log('success', response);
// 									},
// 									function (error) {
// 										console.log('error', error);
// 									}
// 								);
// 							},
// 							function (error) {
// 								console.log('error', error);
// 							}
// 						);
// 					},
// 					function (error) {
// 						console.log('error', error);
// 					}
// 				);
// 			},
// 			function (error) {
// 				console.log('error', error);
// 			}
// 		);
// 	},
// 	function (error) {
// 		console.log('error', error);
// 	}
// );

// This is why we do not use Callback function to prevent Callback hell
// where we use callback function multiple time like IF ELSE nested
// until they decide add limit for their code
// As developer, you do not wanna break your code like this
// or prevent this callback hell usage ever on code development

// Example of promise callback function
requestPromise(`https://google.com`).then((response) => {
  console.log(`success`,response);
})
.catch((error)=>{
  console.log(`error`,error);
});

// requestPromise('movie.com')
// 	.then((response) => {
// 		console.log('success', response);
// 		requestPromise('movie.com')
// 			.then((response) => {
// 				console.log('success', response);
// 				requestPromise('movie.com')
// 					.then((response) => {
// 						console.log('success', response);
// 						requestPromise('movie.com')
// 							.then((response) => {
// 								console.log('success', response);
// 								requestPromise('movie.com')
// 									.then((response) => {
// 										console.log('success', response);
// 									})
// 									.catch((error) => {
// 										console.log('error', error);
// 									});
// 							})
// 							.catch((error) => {
// 								console.log('error', error);
// 							});
// 					})
// 					.catch((error) => {
// 						console.log('error', error);
// 					});
// 			})
// 			.catch((error) => {
// 				console.log('error', error);
// 			});
// 	})
// 	.catch((error) => {
// 		console.log('error', error);
// 	});

// Promise call function also has similiar with callback function
// They can also have callback hell function which we already above of us
// This is a early concept basic learning of callback hell and promise usage
// at Asynchronous Javascript

// EXAMPLE of using correct way Promise call function at Asynchronous Javascript
// requestPromise('movie.com')
// 	.then((result) => {
// 		console.log('page 1');
// 		console.log(result);
// 		return requestPromise('movie.com');
// 	})
// 	.then(() => {
// 		console.log('page 2');
// 		return requestPromise('movie.com');
// 	})
// 	.then(() => {
// 		console.log('page 3');
// 		return requestPromise('movie.com');
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// Try refresh your browser console to see the result requestPromise

// Example of Advance promise callback function at Asynchronous Javascript
const RealPromise = () => {
  return new Promise((resolve, reject) => {
    resolve (()=> {
      'Success to resolve request';
    });
    reject(() => {
      'Failed to resolve request';
    });
  });
};

// Open your browser console and type this code below
// const req = new RealPromise()
// console.log(req) or type req and enter
// Result are generate everytime you refresh the page
// Either 'Success to resolve request'
// or 'Failed to resolve request'