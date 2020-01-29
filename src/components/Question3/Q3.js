import React from 'react';

class Q3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div>
        <h3>Question 3: Find a book</h3>
        <div>
        Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it?  Can you express this process as a search algorithm? Implement your algorithm to find a book whose Dewey and book title is provided.
        </div>
        <br /><br />
        <div>
          Looking for a book using Dewey Decimal System: <br /><br />
          You begin by looking for one of the ten general categories.  Once you have a category selected, it is further broken down into subcategories until you reach the individual identifier within that library's DDS(Dewey Decimal System).
          <br /><br />
          If we are using a BST, you'll have to create a huge tree, with the node containing all values 001-999, from there categories 001-500, and 501-999, then off of there: 001-250, 251-500 etc etc etc until you reach your specific book identifier. ex: 681.123
          <br /><br />
          To find a Book you are looking for, you will then just work your way up the tree from the specific book .123 it will be in a section 'ones place', topic 'tens place', category 'hundreds place'.
        </div> 
 
      </div>
    )
  }
}

export default Q3;