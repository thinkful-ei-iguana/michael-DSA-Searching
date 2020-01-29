import React from 'react';
import Searching from '../../Utilities/searching';

class Q1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: 'Output will render here'
    }
  }

  binary8 = (ev) =>{
    ev.preventDefault();
    console.log(this.props.array)
    let foundIn = Searching.binarySearch(this.props.array, 8);
    this.setOutput(foundIn);
  }

  binary16 = (ev) => {
    ev.preventDefault();
    let foundIn = Searching.binarySearch(this.props.array, 16);
    if (foundIn === -1) {
      foundIn = 'This number was not found in the test data.';
    };
    this.setOutput(foundIn);
  }

  displayList = (ev) => {
    let list = this.props.array;
    this.setOutput(list);
  }

  setOutput = (result) => {
    this.setState({
      output: `${result}`
    })
  }

  render(){
    let output;
    output = this.state.output;
    return(
      <div>
        <h3>Question 1: How many Searches</h3>
        <p>Given a sorted list and useing the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find the value.</p>
        <button onClick={this.binary8}>
            Binary Search to find 8
        </button>
        <button onClick={this.binary16}>Binary Search to find 16</button>
        <button onClick={this.displayList}>Show me the List!</button>
    <div className="output">{output}</div>
      </div>
    )
  }
  
  
}

export default Q1;