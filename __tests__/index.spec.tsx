import * as React from 'react';
import { render } from '@testing-library/react';
import ReactCalendarGraph from '../src/main';

describe('01/basic props', () => {
  test('<ReactCalendarGraph /> set content to body should be worked', () => {
    render(<ReactCalendarGraph />);
    console.log(document.body.innerHTML);
    expect(document.body.innerHTML.includes('Enjoy coding')).toBeTruthy();
  });
});
