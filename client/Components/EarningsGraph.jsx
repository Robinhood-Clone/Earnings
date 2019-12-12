import React from 'react';
import $ from 'jquery';
import Header from './Header.jsx';
import GraphBody from './GraphBody.jsx';
import Legend from './Legend.jsx';
import GlobalStyle from './GlobalStyle.jsx';
import styled from 'styled-components';


class EarningsGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStockTicker: 'PSX',
      earningsInfo: {
        _id: '5de97f22ce0ca0c23ef75849',
        seedID: 1,
        ticker: 'ASX',
        companyName: 'Advanced Semiconductor Engineering, Inc.',
        data: [{
          _id: '5de97f22ce0ca0c23ef75851',
          quarter: '2018-01-01T08:00:00.000Z',
          estimatedPrice: '$424.23',
          actualPrice: '$160.70'
        },
        {
          _id: '5de97f22ce0ca0c23ef75850',
          quarter: '2018-04-01T07:00:00.000Z',
          estimatedPrice: '$33.88',
          actualPrice: '$22.26'
        },
        {
          _id: '5de97f22ce0ca0c23ef7584f',
          quarter: '2018-07-01T07:00:00.000Z',
          estimatedPrice: '$311.80',
          actualPrice: '$436.13'
        },
        {
          _id: '5de97f22ce0ca0c23ef7584e',
          quarter: '2018-10-01T07:00:00.000Z',
          estimatedPrice: '$93.75',
          actualPrice: '$247.85'
        },
        {
          _id: '5de97f22ce0ca0c23ef7584d',
          quarter: '2019-01-01T08:00:00.000Z',
          estimatedPrice: '$288.22',
          actualPrice: '$459.33'
        },
        {
          _id: '5de97f22ce0ca0c23ef7584c',
          quarter: '2019-04-01T07:00:00.000Z',
          estimatedPrice: '$97.50',
          actualPrice: '$399.49'
        },
        {
          _id: '5de97f22ce0ca0c23ef7584b',
          quarter: '2019-07-01T07:00:00.000Z',
          estimatedPrice: '$341.62',
          actualPrice: '$462.33'
        },
        {
          _id: '5de97f22ce0ca0c23ef7584a',
          quarter: '2019-10-01T07:00:00.000Z',
          estimatedPrice: '$281.80',
          actualPrice: '$99.19'
        }
        ],
        __v: 0
      },
    };

    this.getEarningsInfo = this.getEarningsInfo.bind(this);
  }

  componentDidMount() {
    let x = location.pathname;
    let stockTicker = x.substring(8, x.length - 1); // 8 is the length of string '/stocks/'
    this.getEarningsInfo(stockTicker);
  }

  getEarningsInfo(stockTicker) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:4200/api/earnings/?ticker=${stockTicker}`,
      success: (data) => {
        this.setState(
          {
            currentStockTicker: stockTicker,
            earningsInfo: data[0]
          }
        );
      }
    });
  }

  render() {
    return (
      <div>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <GraphBody earningsInfo={this.state.earningsInfo.data}></GraphBody>
        <Legend></Legend>
      </div>
    );
  }
}

export default EarningsGraph;