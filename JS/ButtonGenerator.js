

const buttonContainer = document.getElementById('button-container');

// Set the display property to flex
buttonContainer.style.display = 'flex';

// Set the justifyContent property to center
buttonContainer.style.justifyContent = 'space-around';


for (let i = 1; i <= 10; i++) {
  // Create a new button element
  const button = document.createElement('button');
  
  // Set the button's text content
  button.textContent = `Button ${i}`;
  
  // Append the button to the container
  buttonContainer.appendChild(button);
}



