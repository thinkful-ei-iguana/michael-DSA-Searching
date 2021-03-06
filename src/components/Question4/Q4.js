import React from 'react';

class Q4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div>
        <h3>Question 4: Searching in a BST</h3>
        <div>
          1. Given a BST whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. What would be its Postorder traversal?
          <br /><br />
          Postorder traversals:
          <br />
          14 19 15 27 25 79 90 91 89 35<br />
          
        </div>
        <br /><br />
        <div>
          2. The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?
          <br />
          Pre-order: 8 6 5 7 10 9 11
        </div>
      </div>
    )
  }
}

export default Q4;