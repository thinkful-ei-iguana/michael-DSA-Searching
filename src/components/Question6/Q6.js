import React from 'react';
import Searching from '../../Utilities/searching';

class Q6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0
    }
  }
  starTrekBST = Searching.createRankTree();
  commandArray = this.starTrekBST.bfs(this.starTrekBST);
  
  handleNext = (ev) => {
    ev.preventDefault();
    if (this.state.i < this.commandArray.length) {
      this.setState({
        i: this.state.i + 1
      })
    }
    else this.setState({
      i: 0
    });
  }
  render() {
    console.log(this.starTrekBST);
    console.log(this.commandArray);
    return(
      <div>
        <h3>Question 6: Find the next commanding officer</h3>
    <div>Captain on the Bridge: <br />
    <h4>{`${this.commandArray[this.state.i]}`}</h4>
    <button onClick={this.handleNext}>NEXT</button>
    </div>
      </div>
    )
  }
}

export default Q6;