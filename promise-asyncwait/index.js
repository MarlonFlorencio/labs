const { getNameAsync } = require('./service-async');
const { getNamePromise } = require('./service-promise');
const { errorHandler } = require('./handler');


/*
getNamePromise()
  .then( val => console.log(`Promise method : ${val}`) )
  .catch(errorHandler);
*/

getNameAsync()
  .then( val => console.log(`Async/Await method : ${val}`) )
  .catch(errorHandler);