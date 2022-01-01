import React, { useEffect, useState } from 'react';
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
  const [v, setV] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setV(data);
    }, 100);
  }, []);
  return (
    <Container>
      <ReactCalendarGraph items={v} />
    </Container>
  );
};
