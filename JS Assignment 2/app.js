//Q1) Write a function in JavaScript that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.

function createAdder(num) {
  return function(x) {
    return x + num;
  };
}
// Example:
const addFive = createAdder(5);
console.log(addFive(10)); // Output: 15
console.log(addFive(20)); // Output: 25

//Q2) Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.

function searchArray(arr, val) {
  if (arr.length === 0) {
    return false; // Base case: value not found
  } else if (arr[0] === val) {
    return true; // Base case: value found
  } else {
    return searchArray(arr.slice(1), val); // Recursive case: search rest of array
  }
}
// Example:
const myArray = [1, 2, 3, 4, 5];
console.log(searchArray(myArray, 3)); // Output: true
console.log(searchArray(myArray, 6)); // Output: false

//Q3) Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element.

function addNewParagraph(text) {
  const newParagraph = document.createElement("p"); // Create a new paragraph element
  const content = document.createTextNode(text); // Create a text node with the input text
  newParagraph.appendChild(content); // Append the text node to the new paragraph element
  document.body.appendChild(newParagraph); // Append the new paragraph element to the end of the body
}
// Example:
addNewParagraph("Hello, world!"); // Adds a new paragraph element with the text "Hello, world!" to the end of the body

// Q4) Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.
function addNewListItem(text) {
  const list = document.getElementById("myList"); // Get the unordered list element by ID
  const newListItem = document.createElement("li"); // Create a new list item element
  const content = document.createTextNode(text); // Create a text node with the input text
  newListItem.appendChild(content); // Append the text node to the new list item element
  list.appendChild(newListItem); // Append the new list item element to the unordered list
}
// Example:
addNewListItem("Item 1"); // Adds a new list item with the text "Item 1" to the unordered list with ID "myList"
addNewListItem("Item 2");


//Q5) Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element, and the second argument is a string representing the new background color.

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  
  // Example:
  const myElement = document.getElementById("bg-color"); // Get the element by ID
  changeBackgroundColor(myElement, "powderblue"); // Changes the background color of the element to powderblue
  
//Q6) Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.

function saveToLocalStorage(key, object) {

  const objectString = JSON.stringify(object); // Convert the object to a string using JSON.stringify()
  localStorage.setItem(key, objectString); // Save the string to localStorage using the specified key
}

// Example: 1 
  const myObject = { name: "M Hasan", age: 28 }; // The object to store
  saveToLocalStorage("myKey", myObject); // Saves the object to localStorage using the key "myKey"
// Example: 2
 let prevStudents = localStorage.getItem("students"); // get from LocalStorage
    let students1 = prevStudents ? JSON.parse(prevStudents) : [];
    function provideStudent() {
      let std = {
        name: prompt("Enter Name"),
        rollNo: +prompt("Enter Roll no"),
        teacher: prompt("Enter Teachers Name"),
        className: prompt("Enter Your Class"),
      };
      students1.push(std);
      console.log(students1);
      let stringify = JSON.stringify(students1); // Convert it to String
      localStorage.setItem("students", stringify); // Save it to LocalStorage
    }
    provideStudent();

//Q7) Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object.

function getFromLocalStorage(key) {
  const objectString = localStorage.getItem(key); // Get the string from localStorage using the specified key
  const object = JSON.parse(objectString); // Convert the string to an object using JSON.parse()
  return object; // Return the object
}
// Example:
const myObject = getFromLocalStorage("myKey"); // Retrieves the object from localStorage using the key "myKey"
console.log(myObject); // Logs the retrieved object to the console


//Q8) Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object.

function saveObjectToLocalStorage(object) {
  // Save each property to localStorage using the property name as the key and the property value as the value
  for (const [key, value] of Object.entries(object)) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Retrieve the object from localStorage and return it as a new object
  const newObject = {};
  for (const key in object) {
    const valueString = localStorage.getItem(key);
    if (valueString !== null) {
      newObject[key] = JSON.parse(valueString);
    }
  }
  return newObject;
}

// Example:
const myObject = { name: "John", age: 30, hobbies: ["reading", "coding"] }; // The object to save
const retrievedObject = saveObjectToLocalStorage(myObject); // Saves the object to localStorage and retrieves it as a new object
console.log(retrievedObject); // Logs the retrieved object to the console
