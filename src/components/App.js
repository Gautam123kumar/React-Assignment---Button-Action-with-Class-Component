import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = ({
			renderp : false,
		})
	};

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				{this.state.renderp ? <p id ="para">"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"</p>
				: <button id ="click" onClick={()=>{
					this.setState({
						renderp:true,
					});
				}}>Click</button>
				}
    		</div>
    	);
    }
}


export default App;

