import React from 'react';

class Q3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      title: '',
      dewey: ''
    }
  }
  library = [
    { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
    { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
    { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
    { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
    { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
    { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
    { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
    { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
    { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
    { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
  ];

  librarySearch = (array, dewey, title, start=0, end=array.length-1) => {
    if (start > end) {
      return `Sorry we don't have this book.`;
    }
    const index = Math.floor((end + start) / 2);
    const book = array[index];

    if (book.dewey === dewey){
      if(book.title === title){
        return book;
      } else if (book.title < title) {
        return this.librarySearch(array, dewey, title, index + 1, end)

      } else if (book.title < title){
        return this.librarySearch(array, dewey, title, start, index -1);
      }

    }
    else if (book.dewey < dewey ) {
      return this.librarySearch(array, dewey, title,index + 1, end)
    }
    else if (book.dewey > dewey) {
      return this.librarySearch(array, dewey, title,start, index - 1)
    }
  }

  handleClick = (ev) => {
    ev.preventDefault();
    let book = this.librarySearch(this.library, '005.133', 'The C++ Programming Language');
    this.setBook(book);
  };

  setBook = (book) => {
    this.setState({
      author: book.author,
      title: book.title,
      dewey: book.dewey
    })
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
          In order to find a book you would first find the category, then sub cat. etc. until you landed on the dewey decimal of the book. (binary search)
          <br /><br />
          Once you got the dewey, you would find the book by its title.  If there are multiple books under the same dewey, you would need to do another binary search for the title.
          <br /><br />
          Given some example data, click this button to return the book data for a book that we know the title ('The C++ Programming Language') and dewey ('005.133') of:
        </div> 
        <button onClick={this.handleClick}>Click me!</button>
          <div>Title: {`"${this.state.title}"`}</div>
          <div>Author: {this.state.author}</div>
          <div>Dewey: {this.state.dewey}</div>
      </div>
    )
  }
}

export default Q3;