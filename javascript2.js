let fruits1 = ["apple", "banana", "orange", "mango", "jackfruits"];
fruits1.push("pineapple", "strawberry", "watermelon");
console.log(fruits1);
//output::['apple', 'banana', 'orange', 'mango', 'jackfruits', 'pineapple', 'strawberry', 'watermelon']
//2.Create an array of 6 numbers. Remove the last element using pop() and print the result.
let numbers = [10,20,30,40,50,60];
let removedNumber = numbers.pop();
console.log("Removed element:", removedNumber);
console.log("updated array:", numbers);
//output: removed number:60, array[10,20,30,40,50]
//3.  Create an array of 5 names. Remove the first element using shift() and print the array.
let names = ["ravi", "selvi", "babu", "david", "ammu"];
let removedName = names.shift();
console.log("Removed element:", removedName);
console.log("Updated array:", names);
//output: removed element:ravi, Updated array: (4)['selvi', 'babu', 'david', 'ammu']
//4.Create an array of 4 numbers. Add two numbers at the beginning using unshift().//
let numbers1 = [3, 4, 5, 6];
numbers1.unshift(1, 2);
console.log(numbers1);
//output::(6) [1, 2, 3, 4, 5, 6]
//5. Given let arr = [10, 20, 30, 40, 50], remove 2 elements starting from index 1 using splice().
let arr = [10, 20, 30, 40, 50];
let removedElements = arr.splice(1, 2);
console.log("Removed elements:", removedElements);
//output::removed element: (2)[20,30],updated array(3)[10,40,50]
//6. Given let arr = [1, 2, 3, 4, 5], replace the value 3 with 100 using splice().//
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(2, 1, 100);
console.log(arr1);
//output:(5) [1, 2, 100, 4, 5]//
//7. Create an array of 5 numbers and use fill() to replace the elements from index 2 to index 4 with "hello".
let arr2 = [10, 20, 30, 40, 50];
arr2.fill("hello", 2, 4);
console.log(arr2);
//output::(5){10,20,hello,hello,50}
//8.Create two arrays of numbers and combine them using concat()
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray);
//output:[1,2,3,4,5,6]
//9. Given let arr = [10, 20, 30, 40, 50, 60], extract elements from index 1 to index 4 using slice().
let arr3 = [10,20,30,40,50,60];
let result = arr3.slice(1,4);
console.log(result);
//output:[20,30,40]
//10.Create a nested array and convert it into a single-level array using flat(Infinity).
let nestedarr4 = [1,[2,3],[4,[5,6,[7,8]]]];
let flatarr4 = nestedarr4.flat(Infinity);
console.log(flatarr4);
//output: [1,2,3,4,5,6,7,8]
//11.Given let arr = [10, 20, 30, 40, 50], check whether the value 30 exists using includes().
let arr4 = [10, 20, 30, 40, 50];
let exists = arr4.includes(30);
console.log(exists);
//output::true
//12.Given let arr = [5, 10, 15, 20, 25], find the index of 20 using indexOf().
let arr5 = [5, 10, 15, 20, 25];
let index = arr5.indexOf(20);
console.log(index);
//output:3
//13.Given let arr = [1, 2, 3, 2, 1, 2], find the last index of 2 using lastIndexOf().
let arr6 = [1, 2, 3, 2, 1, 2];
let lastIndex = arr6.lastIndexOf(2);
console.log(lastIndex);
//output: 5
//14. C
// create an array of numbers and arrange its elements using sort().
/*let jd = [40, 10, 100, 5, 25];
console.log(jd.sort());*/

let arr7 = [40, 10, 100, 5, 25];
arr7.sort((a, b) => a - b);
console.log(arr7);
//output: 5,10,25,40,100
//15.Create an array of 7 numbers and reverse the order using reverse().
let arr8 = [10, 20, 30, 40, 50, 60, 70];
arr8.reverse();
console.log(arr8);//output:70,60,50,40,30,20,10
//16.Create two arrays containing 4 numbers each. Merge them into one array using the spread operator.
let arr11= [1, 2, 3, 4];
let arr22 = [5, 6, 7, 8];
let mergedArr = [...arr11, ...arr22];
console.log(mergedArr);
//output:1,2,3,4,5,6,7,8
//17.Create two objects: one containing student details and another containing job details. Merge both objects using the spread operator.
let studentDetails = {
  name: "ravi",
  age: 22,
  major: "Computer Science"
};
let jobDetails = {
  jobTitle: "Software Engineer Intern",
  company: "Tech Corp",
  location: "Remote"
};
let mergedProfile = { ...studentDetails, ...jobDetails };
console.log(mergedProfile);
//output:name: 'ravi', age: 22, major: 'Computer Science', jobTitle: 'Software Engineer Intern', company: 'Tech Corp',
//18.Create a function that accepts two parameters and uses the rest operator to collect all remaining arguments into an array.
 function summarizeScores(studentName, courseName, ...scores) {
  console.log("Student:", studentName);
  console.log("Course:", courseName);
  console.log("Remaining scores (array):", scores);
}
summarizeScores("selvi", "JavaScript 101", 85, 90, 95, 100);
//output:Student: selvi ,javascript2.js:105 ,Remaining scores (array): (4) [85, 90, 95, 100]
//19. Write a function using function one(a, b, ...c) that prints the sum of a, b, c[0], and c[1].
function one(a, b, ...c) {
  let sum = a + b + c[0] + c[1];
  console.log("Sum:", sum);
}
one(10, 20, 30, 40, 50, 60);
//output:Sum: 100
//20.Create two arrays and use the spread operator to copy all elements from the first array into a new array.
let originalArr = [10, 20, 30, 40];
let copiedArr = [...originalArr];
console.log(copiedArr);
//output:10 20,30,40
//21.Given let arr = [10, 20, 30, 40], extract all four values into separate variables using array destructuring.
let arr9 = [10, 20, 30, 40];
let [a, b, c, d] = arr9;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
//output:10,20,30,40
//22. Given let nested = [1, 2, [3, 4, [5, 6]]], extract the values 1, 2, 3, 4, 5, and 6 using nested destructuring.
let nested = [1, 2, [3, 4, [5, 6]]];
let [a1, b1, [c1, d1, [e1, f1]]] = nested;
console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);
console.log(e1);
console.log(f1);
//output:1 2 3 4 5 6 
//23.Create an array containing a student's name, age, and CGPA. Extract these values using destructuring and print them.
let student = ["Ammu", 22, 3.8];
let [name, age, cgpa] = student;
console.log("Name:", name);
console.log("Age:", age);
console.log("CGPA:", cgpa);
//output: name: ammu, age: 22, cgpa: 3.8//
//24.Create an object containing name, role, and location. Extract these properties using object destructuring.
let user = {
  name11: "babu",
  role11: "Frontend Developer",
  location11: "New York"
};
let { name11, role11, location11 } = user;
console.log("Name:", name11);
console.log("Role:", role11);
console.log("Location:", location11);
//25. Create an object containing a student's name and a nested address object with city and state. Extract the city and state using nested object destructuring.//
let student1 = {
  name: "senthil",
  address: {
    city: "Chennai",
    state: "Tamil Nadu"
  }
};
let { address: { city, state } } = student1;
console.log("City:", city);  
console.log("State:", state);
//output: chennai, state:tamilnadu
//26.Given an object with name, role, and location: { mainLocation, currentLocation }, print all four values using destructuring.
let user1 = {
  name: "Araya",
  role: "Software Engineer",
  location: {
    mainLocation: "Chennai",
    currentLocation: "Bengaluru"
  }
};
let { 
  name2, 
  role2, 
  location: { mainLocation, currentLocation } 
} = user1;
console.log("Name:", name2);
console.log("Role:", role2);                       // Output: Software Engineer
console.log("Main Location:", mainLocation);       // Output: Chennai
console.log("Current Location:", currentLocation); // output: bengaluru

//26. Given an object with name, role, and location: { mainLocation, currentLocation }, print all four values using destructuring.
const user2 = {
  name3: "raj",
  role3: "Software Engineer",
  location: {
    mainLocation: "Chennai",
    currentLocation: "Virudhunagar"
  }
};
const { 
  name3, 
  role3, 
  location: { mainLocation1, currentLocation1 } 
} = user2;
console.log("Name:", name3);
console.log("Role:", role3);
console.log("Main Location1:", mainLocation);
console.log("Current Location1:", currentLocation);
//output: 
//Name: raj Role: Software Engineer Main Location1: Chennai Current Location1: Bengaluru
//27. Create an array of 10 numbers. Remove the first and last elements, add two new numbers at the beginning, and print the final array.
let numbers0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers0.shift();
numbers0.pop();
numbers0.unshift(99, 100);
console.log(numbers0);
//output : 99,100,2,3,4,5,6,7,8,9
//28.  Create an array containing duplicate numbers. Use includes(), indexOf(), and lastIndexOf() to check and print information about one selected number.
const numbers5 = [5, 12, 8, 5, 20, 12, 8, 30];
const target = 12;
const isIncluded = numbers5.includes(target);
const firstIndex2 = numbers5.indexOf(target);
const lastIndex2 = numbers5.lastIndexOf(target);
console.log(`Checking number: ${target}`);
console.log("Includes target?", isIncluded);
console.log("First occurrence index:", firstIndex2);
console.log("Last occurrence index:", lastIndex2);
//output:Checking number: 12 Includes target? true First occurrence index: 1 Last occurrence index: 5 

//28. Create an array containing duplicate numbers. Use includes(), indexOf(), and lastIndexOf() to check and print information about one selected number.
const scores = [45, 80, 95, 80, 60, 95, 75];
const targetScore = 95;
const hasScore = scores.includes(targetScore);
const firstPosition = scores.indexOf(targetScore);
const lastPosition = scores.lastIndexOf(targetScore);
console.log(`Target Score: ${targetScore}`);
console.log("Exists in array (includes):", hasScore);
console.log("First occurrence index (indexOf):", firstPosition);
console.log("Last occurrence index (lastIndexOf):", lastPosition);
//output: Target Score: 95 Exists in array (includes): true First occurrence index (indexOf): 2 Last occurrence index (lastIndexOf): 5
//29.Create two objects containing employee information. Merge them using the spread operator, then destructure and print the employee's name and role.
const employeeDetails = {
  name: "Priya",
  role: "Senior Developer",
  department: "Engineering"
};

const employeeContact = {
  email: "priya@gmail.com",
  phone: "9876512325",
  location: "Chennai"
};
const mergedEmployee = { ...employeeDetails, ...employeeContact };
const { name5, role5 } = mergedEmployee;
console.log("Name:", name5);
console.log("Role:", role5);
//output :name =priya,role =senior developer
//30.  Create a nested array containing numbers. Flatten it using flat(Infinity), reverse the resulting array, and print the final result.
const nestedArray = [1, [2, 3, [4, 5]], 6, [7, 8]];
const finalArray = nestedArray.flat(Infinity).reverse();
console.log(finalArray);
//output:: 8, 7, 6, 5, 4, 3, 2, 1