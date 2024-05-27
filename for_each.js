// The forEach method allows you to iterate over the elements of an array and execute a provided function once for each element.
//uses:
//1- Iterates Over Array Elements: The forEach method iterates over each element of the array, one by one.
//2- Executes a Function for Each Element: For each element in the array, the forEach method executes a provided function once.
//3- Accesses Element and Index: The provided function can access both the current element being processed and its index in the array.
//4- Does Not Create a New Array: Unlike some other array methods like map or filter, forEach does not create a new array. It's mainly used for executing a function for its side effects.
var animals = ["cat", "dog", "sheep", "goat", "camel"];
animals.forEach(function (element, index) {
    //The forEach method iterates over each element of the animals array.
    // It takes a callback function as an argument. This function will be executed for each element in the array.
    //here (element, index) => { ... } is a call back function...
    //It takes two parameters: element and index.
    //element: Represents the current element being processed in the array.
    //index: Represents the index of the current element in the array.
    console.log("The Element At ".concat(index, " index is ").concat(element));
});
//Author-Huma Mohsin
