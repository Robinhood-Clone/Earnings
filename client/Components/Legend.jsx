import React from 'react';
import styled from 'styled-components';
import colors from './Colors.jsx';

const OuterContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-top: 20px;
  font-weight: 400;
`;

const EstimatedDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 30px;
  margin-right: 15px;
`;

const ActualDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 40px;
  margin-right: 15px;
`;


const Legend = (props) => {

  return (
    <OuterContainer>
      <EstimatedDot className="estimatedDotGlobalColor"></EstimatedDot>
      <div>Estimated <br></br> --- </div>
      <ActualDot className="actualDotGlobalColor"></ActualDot>
      <div>Actual <br></br> Expected Jan 28, After Hours</div>
    </OuterContainer>

  );
};

export default Legend;