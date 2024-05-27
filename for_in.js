// In javascript, we use for in loop when we want to iterate over the properties of an object.
var student = {
    name: "Huma Mohsin",
    Id: 34567,
    center: "Karachi",
    course: "GenAI",
    Day: "Friday",
};
console.log("\n***To Iterate Over An Object***\n");
for (var key in student) {
    // console.log(student[key]);//this shows only values.
    console.log("".concat(key, " : ").concat(student[key])); //This shows the key and values to their corrsponding key.
}
//One way to find values at different index in an array we can use for in loop but due to various reason it is not recomended to use for in loop to an array.
console.log("\n***To Iterate Over An Array***\n");
var std_arr = ["Huma", "Sana", "Saira", "Zainab", "Ayesha"];
for (var index in std_arr) {
    console.log("".concat(index, " : ").concat(std_arr[index]));
}
//Author-Huma Mohsin
