/* eslint-disable no-undef */
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import reviews from '../data/ExampleReviews.json';
import metaData from '../data/ExampleReviewMetaData.json';
import Reviews from '../../src/components/rr_components/Reviews.jsx';

describe('Ratings and Reviews', () => {
  it('should load the widget', () => {
    waitFor(render())
  })
});
