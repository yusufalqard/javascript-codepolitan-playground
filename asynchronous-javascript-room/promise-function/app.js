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
      if (delay > 4000) {
        failure(`Error: Connection Timeout`);
      } else {
        success(`Success: ${url}(${delay}ms)`);
      }
    }, delay);
  });
};

// Example about callback function
requestCallback('movie.com', function(response){
  console.log(`success`,response);  
},
function(error){
  console.log(`error`, error);
});

// Exampe why developer not using callback function

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

// This is why we do not use Callback function to prevent Callback hell
// where we use callback function multiple time like IF ELSE nested
// until they decide add limit for their code
// As developer, you do not wanna break your code like this
// or prevent this callback hell usage ever on code development