import React, { Component, useRef } from 'react';
import generatePDF from 'react-to-pdf';

import './App.css';
import Generic from './Generic';
import Page from './Page';
import FieldIngredient from './FieldIngredient';


class App extends Component {
	constructor(props) {
		super(props);

		// Create a ref and assign it to an instance variable
		this.targetRef = React.createRef();
	}

	componentDidMount() {
		// Access the DOM node using the ref after the component has mounted
		if (this.targetRef.current) {
			this.targetRef.current.focus();
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<button onClick={() => generatePDF(this.targetRef, { filename: 'page.pdf' })}>Download PDF</button>
					<div ref={this.targetRef}>
						<input
							className="FieldPreTime"
							type="text"
						/>
						<input
							className="FieldCookTime"
							type="text"
						/>
						
						<div className="FieldIngredientContainer">
							<FieldIngredient />
							<FieldIngredient />
							<FieldIngredient />
							<FieldIngredient />
						</div>
					</div>
					{/* <Page ref={this.targetRef} /> */}
				</header>
			</div>
		);
	}
}

export default App;