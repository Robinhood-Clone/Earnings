import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.14px;
  line-height: 30px;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  border-bottom: 1px solid #f4f4f5;
  padding-bottom: 16px;
`;

const Header = () => {

  return (
    <div>
      <H2>Earnings</H2>
    </div>

  );
};

export default Header;