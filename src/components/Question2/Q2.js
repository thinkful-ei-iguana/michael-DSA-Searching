import React from 'react';
import Searching from '../../Utilities/searching';

class Q2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      value: '',

      results: 'Output will render here.',
      
    }
    
  }

  handleLinearSearch = (ev) => {
    ev.preventDefault();
    let howMany = Searching.indexOf(this.state.dataset, this.state.value);
    if (howMany === -1){
      return this.setState({results: `${this.state.value} does not appear in the dataset. Even after iterating ${this.state.dataset.length + 1} times`})
    } else {
      return this.setState({results: `${this.state.value} appeared after ${howMany + 1} tries.`})
    }
  }

  compareFunction = (a, b) => {
    return a-b;
  }

  handleBinarySearch = (ev) => {
    ev.preventDefault();
    let sortedArray = this.state.dataset.sort(this.compareFunction);
    console.log(sortedArray);
    let howMany = Searching.binarySearch(sortedArray, this.state.value,0,sortedArray.length);
    if (howMany === -1){
      return this.setState({results: `${this.state.value} does not appear in the dataset.`})
    } else {
      return this.setState({results: `${this.state.value} appeared after ${howMany} tries.`})
    }
  }

  takeInput = ev => {
    this.setState({value: ev.target.value})
  }
  
  
  render() {
    return(
      <div>
        <h3>Question 2: Linear and Binary Search</h3>
        
        <div>
        Given the following dataset: 
        <br></br><br></br>
        <div className="dataset">
        89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5
        </div>
        <br></br>
        Find out how many tries it took to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out:
        </div>

        <input onChange={this.takeInput} value={this.state.value} type='number'>

        </input>
        <button onClick={this.handleLinearSearch}>
          Search Dataset Linearly.
        </button>
        <button onClick={this.handleBinarySearch}>Search Dataset Binarily</button>
        <br /><br />
        <div>{this.state.results}</div>
        
      </div>
    )
  }
}

export default Q2;