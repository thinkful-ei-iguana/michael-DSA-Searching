import React from 'react';
import Q1 from './components/question1/Q1';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sortedList1: [3, 5, 6, 8, 11, 12, 14, 15, 17, 18],
    }
  }
  
  render() {
    return (
      <div className="App">
        <Q1 list={this.state.sortedList1} />
      </div>
    );
  }
  
}

export default App;
