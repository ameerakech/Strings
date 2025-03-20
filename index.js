let str = "extravaganza";
let lastFour = str.slice(8);
console.log(lastFour);
//question 2

const food = "The quick fox jumped over the lazy dog";
console.log(food.replace(food[4],'eat'));
//question3
const story = "The quick brown fox jumps over the lazy dog";
let countThe=(story.toLowerCase().split("the").length-1);
console.log(`"the" appears:${countThe} times`);
let countBrown = (story.toLowerCase().split("brown").length-1)
console.log(`"brown appears:${countBrown}times`);
//question four
const string1 = "The pupils are reading in the library";
let wordAre = string1.includes("are");
console.log(`"are" found:${wordAre}`);

const string2 = "The child was sitting on the table before it fell";
let wordSitting = string2.includes("sitting");
console.log(`"sitting" found: ${wordSitting}`);

//question five

//uppercase
let upperCaseStr = "wonderful".toUpperCase();
console.log(upperCaseStr);
//lowercase
let lowerCasestr = "amazing" .toLowerCase();
console.log(lowerCasestr);
//underneath
let lowerCasestr2= "underneath" .toLowerCase();
console.log(lowerCasestr2)



