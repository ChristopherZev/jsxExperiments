//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React Component
const App = () =>{

//Declare a variable or a function like seen below
//to call the func or variable via the JSX below 

//JS objects cannot be called as text 

// const buttonText = {text: 'Click me'} would need 
// called as {buttonText.text}
const varButton = ' Var Button';

const style = {backgroundColor: 'red', color: 'white'};
const jsObjectButton = {text:'jsObj Button'};

function funcButtonText(){
	return 'Function Button'; 
}

//---------------------------------------------------------------


	return( 
		<div>
	{/* for="name" adds the functionatlity for 
		clicking on a label to directly go take 
	user into field "name" is just the ID */}

	{/*To fix 'for' warning changed for to htmlFor*/}
  			<label className="label" htmlFor="name"> 
  				Enter Name: 
  			</label>
  	{/*Must use ClassName instead of class to 
  		avoid collisions with Class keyword in React,
  		may be deprecated in the future*/}
  			<input id="name" type="text"/>
  		{/* custom styling in JSX and call JS variables and functions*/}
  			<button style={{backgroundColor: 'blue', color: 'white'}}>
  			 {varButton} </button>
  				{/*or --------*/}
  			 <button style={{backgroundColor: 'blue', color: 'white'}}>
  			 {funcButtonText()} </button>

  		{/*Shows how you can style a button by calling a JS object 
  			variable*/}
			<button style={style}>
  			 {jsObjectButton.text} </button>
  		



		
		</div>
	);





};
//Take the React Componenet and show it on the screens
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);