import React from 'react';
// import react-testing methods
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Info from '../src/components/po_components/Info.jsx';
import App from '../src/components/App.jsx'

describe('Product Review example tests', () => {
  test('Displays product name "Cameo Onesie" in product info', () => {
    render(<App />);
    waitFor(() => screen.getByRole('none'))
      .then(() => {
        expect(screen.getByRole('none')).toHaveTextContent('Camo Onesie');
      });
  });
});
