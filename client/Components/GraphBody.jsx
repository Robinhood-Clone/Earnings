import React from 'react';
import QuarterDots from './QuarterDots.jsx';
import YAxis from './YAxis.jsx';
import styled from 'styled-components';


const OuterContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const GraphContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const GraphBody = (props) => {

  let estimatedPriceArr = props.earningsInfo.map((element) => element.estimatedPrice.substring(1) * 1);
  let actualPriceArr = props.earningsInfo.map((element) => element.actualPrice.substring(1) * 1);

  let min = Math.min(...estimatedPriceArr, ...actualPriceArr);
  let max = Math.max(...estimatedPriceArr, ...actualPriceArr);

  let quartileTwo = ((max - min) / 3 + min).toFixed(2) * 1;
  let quartileThree = ((max - min) / 3 * 2 + min).toFixed(2) * 1;

  let yAxisValues = [max, quartileThree, quartileTwo, min];

  return (
    <OuterContainer>
      <YAxis yAxisValues={yAxisValues}></YAxis>
      <GraphContainer>
        {props.earningsInfo.map((quarter) => {
          return <QuarterDots earningsInfo={quarter} key={quarter._id} yAxisValues={yAxisValues}></QuarterDots>;
        })}
      </GraphContainer>
    </OuterContainer>
  );
};

export default GraphBody;