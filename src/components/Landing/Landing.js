import React from 'react';
import './Landing.css';

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        On this website you will find answers to questions posed from assignments on 1/29/2020.
        <br /><br />
        For more details on the code that makes this all run, please visit the repository on <a href="https://github.com/thinkful-ei-iguana/michael-DSA-Searching">github</a>.
      </div>
    )
  }
}

export default Landing;