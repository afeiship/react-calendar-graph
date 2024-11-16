import ReactCalendarGraph from '@jswork/react-calendar-graph/src/main';
import '@jswork/react-calendar-graph/src/style.scss';
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
      <ReactCalendarGraph data={v} />
    </div>
  );
}

export default App;
