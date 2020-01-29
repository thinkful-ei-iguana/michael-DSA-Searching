import React from 'react';
import {Link} from 'react-router-dom'

class Header extends React.Component{

  render(){
    return(
      <div className="header">

        <div className="link">
          <Link to="/q1">Question 1</Link>
        </div>
        
        <div className="link">
          <Link to="/q2">Question 2</Link>
        </div>

        <div className="link">
          <Link to="/q3">Question 3</Link>
        </div>

        <div className="link">
          <Link to="/q4">Question 4</Link>
        </div>

        <div className="link">
          <Link to="/q5">Question 5</Link>
        </div>

        <div className="link">
          <Link to="/q6">Question 6</Link>
        </div>  

        <div className="link">
          <Link to="/q7">Question 7</Link>
        </div>

        <div className="link">
          <Link to="/q8">Question 8</Link>
        </div>

      </div>
    )
  }
}

export default Header;