import React from 'react';

// import react-testing methods
import {render, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../src/components/App.jsx';

describe('App level tests', () => {
  test('Displays loading at initial render', async () => {
    render (<App />);
    const banner1 = await waitFor(() => screen.getByText('Loading'));

    expect(banner1).toBeTruthy();
  });
});