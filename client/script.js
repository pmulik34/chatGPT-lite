import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

let loadInteval;

function loader(element){
  // Set the text content of the element to an empty string
  element.textContent = '';
  
  // Define a loadInterval variable as the setInterval function
  // The setInterval function will execute the anonymous function every 300 milliseconds
  loadInteval = setInterval(()=>{
    // Append a period to the text content of the element
    element.textContent += '.';

    // If the text content of the element is equal to '....', reset it to an empty string
    if(element.textContent === '....'){
      element.textContent = '';
    }
  },300)
}

function textType(element, text){
  // Set up an interval to run every 20 milliseconds
  let index = 0;
  let interval = setInterval(()=>{
    // If the index is less than the length of the text
    if(index < text.lenght){
      // Add the character at the current index of the text to the innerHTML of the element
      element.innerHT += text.chartAt(index);
      // Increment the index by 1
      index++;
    }else{
      // If the index is not less than the length of the text, clear the interval
      clearInterval(interval);
    }
  },20);
}

function textType(element, text){
  // Set up an interval to run every 20 milliseconds
  let index = 0;
  let interval = setInterval(()=>{
    // If the index is less than the length of the text
    if(index < text.lenght){
      // Add the character at the current index of the text to the innerHTML of the element
      element.innerHT += text.chartAt(index);
      // Increment the index by 1
      index++;
    }else{
      // If the index is not less than the length of the text, clear the interval
      clearInterval(interval);
    }
  },20);
}

// This function generates a unique ID by combining a timestamp, a random number, and a hexadecimal string.
function generateUniqueId() {

  // Get the current time as a timestamp (number of milliseconds since January 1, 1970).
  const timeStamp = Date.now();

  // Generate a random number between 0 and 1.
  const randomNumber = Math.random();

  // Convert the random number to a hexadecimal string (base 16).
  const hexadecimalString = randomNumber.toString(16);

  // Return the combined ID string, using template literals.
  return`id-${timeStamp}-${hexadecimalString}`;
}





