import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      earningsInfo: [],
    }

    this.getEarningsInfo = this.getEarningsInfo.bind(this);
  }

  getEarningsInfo (stockTicker) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/analystRatings/?ticker=${stockTicker}`,
      success: (data) => {
        this.setState(
          {earningsInfo: data}
        )
        console.log('Get request successful: ', data);
      }
    })
  }

  render () {
    return (
      <div>{this.state.earningsInfo}</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));