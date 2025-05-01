import './App.css';
import { useState } from 'react';
// create a webpage + add a button + make the background change color and alternate between 3-5 colors

// Array of colors to be used for the background
const colors = [
  { name: 'Red', value: '#FF0000' },
  { name: 'Cyan', value: '#00FFFF' },
  { name: 'Green', value: '#00FF00' },
  { name: 'Yellow', value: '#FFFF00' },
  { name: 'Blue', value: '#0000FF' },
];

function App() {
  // Use useState to create a state variable
  // to keep track of the current color index
  const [index, setIndex] = useState(0);

  // Set initial background color red (Since it's the first color in the array)
  document.body.style.backgroundColor = colors[index].value;

  // Function to change the background color
  // and update the index
  // to the next color in the array
  // If the index is at the end of the array, reset it to 0
  const handleColorSwitch = () => {
    const newIndex = (index + 1) % colors.length;
    document.body.style.backgroundColor = colors[newIndex].value;
    setIndex(newIndex);
  };

  return (
    // Create a container for the button and text
    <div className="container">
      {/* Create a button to change the color
      and add a class to it */}
      <button onClick={handleColorSwitch} className="changebutton">
        Change Color
      </button>
      <h1>Color: {colors[index].name}</h1>
    </div>
  );
}

export default App;