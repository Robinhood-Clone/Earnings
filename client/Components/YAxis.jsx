import React from 'react';
import styled from 'styled-components';
import colors from './Colors.jsx';

const Axis = styled.div`
  color: ${(props) => props.color};
  font-family: "DINPro-Light";
  font-weight: 700;
`;

const Label = styled.div`
  padding-top: 0px;
  padding-bottom: 45px;
`;

const YAxis = (props) => {

  return (
    <Axis color={colors.darkGray}>
      {props.yAxisValues.map((value) => {
        return <Label key={value}>{`$${value}`}</Label>;
      })}
    </Axis>
  );
};

export default YAxis;