# W7D3 - Data Fetching & Other Side Effects

### To Do
- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow

### Rules for Hooks
1. Has to be inside of a React function
2. Don't called them conditionally

### Pure Functions
* Doesn't rely on anything or update anything external to itself
* If the function is called with the same arguments, it produces the same result
* Does not produce side effects

```js
let x = 5;
const sum = (y) => {
  x = y;
  return x + y;
}
```

### Side Functions
* Any operation that modifies the state of the computer or interacts with anything outside of your application
  * Write to the file system
  * Console.logging
  * Data fetching
  * Establishing a web socket connection
  * Setting timers/intervals
  * Modifying the DOM directly














# 
