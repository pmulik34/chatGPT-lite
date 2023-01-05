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


