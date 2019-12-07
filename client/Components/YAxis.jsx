import React from 'react';
import styled from 'styled-components';

const Axis = styled.div`
  color: rgb(202, 202, 203)
`;

const Label = styled.div`
  padding-top: 0px;
  padding-bottom: 45px;
`;

const YAxis = (props) => {

  return (
    <Axis>
      {props.yAxisValues.map((value) => {
        return <Label key={value}>{`$${value}`}</Label>;
      })}
    </Axis>
  );
};

export default YAxis;