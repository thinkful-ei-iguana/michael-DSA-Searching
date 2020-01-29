import React from 'react';
import Q1 from './components/Question1/Q1';
import Q2 from './components/Question2/Q2';
import Header from './components/Header/Header';
import {Switch, Route} from 'react-router-dom';
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
        <Header></Header>
        <Switch>
          <Route path="/q1" component={Q1} array={this.state.sortedList1}/>
          <Route path="/q2" component={Q2} />
        </Switch>

        <Q1 array={this.state.sortedList1} />
      </div>
    );
  }
  
}

export default App;
