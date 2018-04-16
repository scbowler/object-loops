const someObj = {
    firstName: 'Bob',
    lastName: 'Lee',
    ocupation: 'Developer',
    age: 24,
    favoriteFood: 'Cheeseburger'
}

// Using for in loop:
console.groupCollapsed('For in example');
for(let key in someObj){
    console.group('Loop Output:');
    console.log('Key:', key);
    console.log('Value:', someObj[key]);
    console.groupEnd();
}
console.groupEnd()

// Using traditional for loop with Object.keys;
console.groupCollapsed('Traditional for loop example');
const objectKeys = Object.keys(someObj);
for(let i = 0; i < objectKeys.length; i++){
    const key = objectKeys[i];
    console.group('Loop Output:');
    console.log('Key:', key);
    console.log('Value:', someObj[key]);
    console.groupEnd();
}
console.groupEnd();

// Using Array.map method with Object.keys:
// This should be used when you want to create a new array from the Object
console.groupCollapsed('Array.map example');
const resultingArrayFromMap = Object.keys(someObj).map((key, index) => {
    console.group('Loop Output:');
    console.log('Key:', key);
    console.log('Value:', someObj[key]);
    console.groupEnd();
});
console.groupEnd();

// NOTE: this is es7 syntax and may not work in all browsers by default. You can use the Polyfill found in the polyfill file to allow this to work on any browser
// Using for of loop with Object.entries:
console.groupCollapsed('For of example');
for(let [key, value] of Object.entries(someObj)){
    console.group('Loop Output:');
    console.log('Key:', key);
    console.log('Value:', value);
    console.groupEnd();
}
console.groupEnd();
