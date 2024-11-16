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
  ```js
  import ReactCalendarGraph from '@jswork/react-calendar-graph';
  import '@jswork/react-calendar-graph/dist/style.scss';
  import dataJson from './assets/data.json';
  import { useEffect, useState } from 'react';

  function App() {
    const [v, setV] = useState<any>([]);

    useEffect(() => {
      setTimeout(() => {
        setV(dataJson);
      }, 100);
    }, []);

    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">
          Build Time: {BUILD_TIME}
        </div>
        <div className="text-center">
          <ReactCalendarGraph
            data={v}
            style={{
              padding: '10px',
              background: 'white',
              borderRadius: '5px',
            }}
          />
        </div>
      </div>
    );
  }

  export default App;
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
