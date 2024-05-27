//For of loop is used when we want to iterate over an iterable objects.

//1- used in an array.
console.log("\n*** To Iterate Over An Array***\n")
let country:string[]=["Pakistan","America","China","Turkey","Switzerland","Australia"];

for (const iterator of country) {
    console.log(`I Like ${iterator}`)
};

//we can also use break and continue here.
//continue helps to skip specifically according to giving condition .
//break helps to Exit the loop specifically according to given condition.

console.log("\n*** Using Continue And Break***\n")

let guests:string[]=["Ali","Sara","Zahid","Kainat","Zimmal","Zain"]

for (const iterator of guests ) {
    if(iterator==="Zahid"){
        console.log(`Sorry ${iterator}, You Are Not Allowed Today As A Guest.`)
        continue;

    }
    else if (iterator==="Zimmal"){
        break;// Stop the loop when "Zimmal" is encountered and did not include zimmal in guest list log message.
    }
    console.log(`Dear ${iterator},You Are Invited At Dinner Today`)
}
//or you can log a message seperately to zahid and others as:

console.log("\n*** Using Continue And Break***\n");

let guests2: string[] = ["Ali", "Sara", "Zahid", "Kainat", "Zimmal", "Zain"];

// //logging a seperate message to zahid.
for (const iterator of guests2) {
  if (iterator === "Zahid") {
    console.log(`\nSorry ${iterator}, You Are Not Allowed Today As A Guest.\n`);
  }
}

for (const iterator of guests2) {
}
//looging message to others guests.
for (const iterator of guests2) {
  if (iterator === "Zimmal") {
    break;
  }

  if (iterator !== "Zahid") {
    console.log(`\nDear ${iterator}, You Are Invited At Dinner Today.\n`);
  }
}
//3- For of loop is also used to iterate over a String.
console.log("\n***To Iterate Over a String***\n");
let message: string = "Pakistan";
for (const char of message) {
  console.log(char);
}
//Author-Huma Mohsin