import React from 'react';
import {Link} from 'react-router-dom'

class Header extends React.Component{

  render(){
    return(
      <div className="header">
        <Link to="/q1">Question 1</Link>
        <Link to="/q2">Question 2</Link>
        <Link to="/q3">Question 3</Link>
        <Link to="/q4">Question 4</Link>
        <Link to="/q5">Question 5</Link>
        <Link to="/q6">Question 6</Link>        <Link to="/q7">Question 7</Link>
        <Link to="/q8">Question 8</Link>
      </div>
    )
  }
}

export default Header;