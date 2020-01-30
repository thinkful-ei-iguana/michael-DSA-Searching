import React from 'react';
import BST from '../../Utilities/BST';
import Searching from '../../Utilities/searching';

class Q5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  myBST = Searching.createBST();
  inOrderArray = this.myBST.inOrderDFS();
  preOrderArray = this.myBST.preOrderDFS();
  postOrderArray = this.myBST.postOrderDFS();
  render() {
    console.log('In order: ', this.inOrderArray);   console.log('Pre order: ', this.preOrderArray);   console.log('Post order: ', this.postOrderArray);


    return(
      <div>
        <h3>Question 5: Implementing different tree traversals</h3>
        <div>
          Original: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22
        </div> 
        <br /><br />
        <div>
          In Order: {`[ ${this.inOrderArray.join(', ')} ]`}
        </div>
        <br /><br />
        <div>
          Pre-Order: {`[ ${this.preOrderArray.join(', ')} ]`}
        </div>
        <br /><br />
        <div>
          Post-Order: {`[ ${this.postOrderArray.join(', ')} ]`}
        </div>
      </div>
    )
  }
}

export default Q5;