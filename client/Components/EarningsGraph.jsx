import React from 'react';
import $ from 'jquery';
import Header from './Header.jsx';
import GraphBody from './GraphBody.jsx';
import Legend from './Legend.jsx';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "DINPro", -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.25px;
    line-height: 19px;
    display: block;
  }
  @font-face {
    font-family: "DINPro";
    src: url("./DINPro.ttf") format('truetype');
  }

  h2 {
    font-size: 26px;
    font-weight: 900;
    letter-spacing: -0.14px;
    line-height: 30px;
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    border-bottom: 1px solid #f4f4f5;
    padding-bottom: 16px;
  }
`;

class EarningsGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStockTicker: 'ATAX',
      earningsInfo: {
        _id: '5de97f22ce0ca0c23ef75849',
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
    this.getEarningsInfo(this.state.currentStockTicker);
  }

  getEarningsInfo(stockTicker) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:4200/earnings/?ticker=${stockTicker}`,
      success: (data) => {
        this.setState(
          { earningsInfo: data[0] }
        );
        console.log('Get request successful: ', data);
        console.log('State after get request: ', data);
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