# react-calendar-graph
> Calendar graph like github for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-calendar-graph
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-calendar-graph/dist/style.css";

  // or use sass
  @import "~@jswork/react-calendar-graph/dist/style.scss";

  // customize your styles:
  $react-calendar-graph-options: ()
  ```
2. import js
  ```js
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
      width: 90%;
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

  ```

## preview
- https://afeiship.github.io/react-calendar-graph/

## license
Code released under [the MIT license](https://github.com/afeiship/react-calendar-graph/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-calendar-graph
[version-url]: https://npmjs.org/package/@jswork/react-calendar-graph

[license-image]: https://img.shields.io/npm/l/@jswork/react-calendar-graph
[license-url]: https://github.com/afeiship/react-calendar-graph/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-calendar-graph
[size-url]: https://github.com/afeiship/react-calendar-graph/blob/master/dist/react-calendar-graph.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-calendar-graph
[download-url]: https://www.npmjs.com/package/@jswork/react-calendar-graph
