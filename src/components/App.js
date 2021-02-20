import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor() {
		super();
		this.state = ({
			renderp : false,
		})
	};

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				
				{this.state.renderP ?
		         <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    
				:
					<button id = "click" onClick={()=>{
						this.setState({
							renderP : true,
						});
					}}>Click!</button>
				}	
    		</div>
    	);
    }
}


export default App;

