import React from 'react';
// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '..src/components/App.jsx';

test('Displays Hello in App', async()=>{
  render(<App />)

  await waitFor(()=> screen.getByRole('heading'))

  expect(screen.getByRole('heading')).toHaveTextContent('Hello')
})