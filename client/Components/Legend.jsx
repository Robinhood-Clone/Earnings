import React from 'react';
import styled from 'styled-components';

const OuterContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-top: 20px;
`;

const EstimatedDot = styled.div`
  background: rgb(192, 240, 225);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 30px;
  margin-right: 15px;
`;

const ActualDot = styled.div`
  background: rgb(33, 206, 153);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 40px;
  margin-right: 15px;
`;


const Legend = (props) => {

  return (
    <OuterContainer>
      <EstimatedDot></EstimatedDot>
      <div>Estimated <br></br> --- </div>
      <ActualDot></ActualDot>
      <div>Actual <br></br> Expected Jan 28, After Hours</div>
    </OuterContainer>

  );
};

export default Legend;