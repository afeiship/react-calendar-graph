import React from 'react';
import ReactCalendarGraph from '../../src/main';
import '../../src/components/style.scss';
import styled from 'styled-components';

// @ts-ignore
import data from './data.json';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
  .react-calendar-graph {
  }
`;

export default () => {
  return (
    <Container>
      <ReactCalendarGraph items={data} />
    </Container>
  );
};
