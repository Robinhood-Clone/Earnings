import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import colors from './Colors.jsx';

const XAxis = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 700;
`;

const QuarterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  height: 205px;
  position: relative;
`;

const ActualDot = styled.div`
  display: flex;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.spaceAboveDotHeight}px;
`;

const EstimatedDot = styled.div`
  display: flex;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.spaceAboveDotHeight}px;
`;



const QuarterDots = (props) => {
  let min = props.yAxisValues[3];
  let max = props.yAxisValues[0];
  let estimatedPrice = props.earningsInfo.estimatedPrice.substring(1) * 1; // convert e.g. from '$36.55' to 36.55
  let actualPrice = props.earningsInfo.actualPrice.substring(1) * 1;

  let spaceAboveDotHeightActual = (max - actualPrice) / (max - min) * (205 - 15); // 205 is the max height of the container, lower it by the size of the dot
  let spaceAboveDotHeightEstimated = (max - estimatedPrice) / (max - min) * (205 - 15);

  return (
    <div>
      <QuarterContainer>
        <EstimatedDot spaceAboveDotHeight={spaceAboveDotHeightEstimated} id={props.earningsInfo.estimatedPrice} className="estimatedDotGlobalColor"></EstimatedDot>
        <ActualDot spaceAboveDotHeight={spaceAboveDotHeightActual} id={props.earningsInfo.actualPrice} className="actualDotGlobalColor"></ActualDot>
      </QuarterContainer>
      <XAxis className="axisGlobalColor">{`Q${moment(props.earningsInfo.quarter).format('Q YYYY')}`}</XAxis>
    </div>
  );
};

export default QuarterDots;
