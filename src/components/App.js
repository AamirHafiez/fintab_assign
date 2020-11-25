import React from 'react';
import '../assets/css/App.css';
import Details from './Details';
import Success from './Success';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      isSuccess: false
    }
  }

  showSuccess = () => {
    this.setState({
      isSuccess: true
    });
  }

  render() {
    const { isSuccess } = this.state;  
    return (
      <React.Fragment>
        {!isSuccess && <Details showSuccess = {this.showSuccess}/>}
        {isSuccess && <Success/>}
      </React.Fragment>
    );
  }
}

export default App;
