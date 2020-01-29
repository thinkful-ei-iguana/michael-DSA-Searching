import React from 'react';
import Q1 from './components/Question1/Q1';
import Q2 from './components/Question2/Q2';
import Q3 from './components/Question3/Q3';
import Q4 from './components/Question4/Q4';
import Q5 from './components/Question5/Q5';
import Q6 from './components/Question6/Q6';
import Q7 from './components/Question7/Q7';
import Q8 from './components/Question8/Q8';
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
          <Route path="/q1" component={() => <Q1 array={this.state.sortedList1} />}
          />
          <Route path="/q2" component={Q2} />
          <Route path="/q3" component={Q3} />
          <Route path="/q4" component={Q4} />
          <Route path="/q5" component={Q5} />
          <Route path="/q6" component={Q6} />
          <Route path="/q7" component={Q7} />
          <Route path="/q8" component={Q8} />


        </Switch>

      </div>
    );
  }
  
}

export default App;
