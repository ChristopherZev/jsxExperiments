//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React Component
const App = () =>{

//Declare a variable or a function like seen below
//to call the func or variable via the JSX below 
const buttonText = 'Click Me!';

function getButtonText(){
	return 'Function Call Submit'; 
}

//---------------------------------------------------------------


	return( 
		<div>
	{/* for="name" adds the functionatlity for 
		clicking on a label to directly go take 
	user into field "name" is just the ID */}
  			<label className="label" for="name"> Enter Name: </label>
  	{/*Must use ClassName instead of class to 
  		avoid collisions with Class keyword in React,
  		may be deprecated in the future*/}
  			<input id="name" type="text"/>
  		{/* custom styling in JSX and call JS variables and functions*/}
  			<button style={{backgroundColor: 'blue', color: 'white'}}>
  			 {buttonText} </button>
  				{/*or --------*/}
  			 <button style={{backgroundColor: 'blue', color: 'white'}}>
  			 {getButtonText()} </button>


		
		</div>
	);





};
//Take the React Componenet and show it on the screens
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);