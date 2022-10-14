import React from 'react';
// import react-testing methods
import {render, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/components/App.jsx';



describe('Example test', ()=>{
  test('Displays Hello in App', ()=>{
    render (<App />)
    waitFor(()=> screen.getByRole('heading'))
    .then(()=>{
      expect(screen.getByRole('heading')).toHaveTextContent('Hello')
    })
  })
})