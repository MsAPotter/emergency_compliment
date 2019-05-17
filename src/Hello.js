import React, { Component } from 'react';

class Hello extends Component {

	constructor() {
		super()

		this.state = {
            name: 'Zack'
            
        }
    }

    render() {
        return (
            <div>
              <h1> {this.state.name} </h1>  
            </div>
        );
    }
}

export default Hello;