// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:

// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.



function timeLimit(fn, t) {
  return async function(...args) {
    return Promise.race([
      fn(...args), // original async function
      new Promise((_, reject) =>
        setTimeout(() => reject("Time Limit Exceeded"), t)
      ),
    ]);
  };
}
