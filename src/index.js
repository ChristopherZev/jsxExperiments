//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React Component
const App = () =>{
	return( 
		<div>
	{/* for="name" adds the functionatlity for 
		clicking on a label to directly go take 
	user into field "name" is just the ID */}
  			<label className="label" for="name"> Enter Name: </label>
  	{/*Must use ClassName instead of class to 
  		avoid collisions with Class keyword in React*/}
  			<input id="name" type="text"/>
  		{/* custom styling in JSX*/}
  			<button style={{backgroundColor: 'blue', color: 'white'}}> Submit </button>
		
		</div>
	);





};
//Take the React Componenet and show it on the screens
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);