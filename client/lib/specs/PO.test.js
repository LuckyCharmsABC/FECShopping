/* eslint-disable no-undef */
import React from 'react';
// import react-testing methods
import { render, waitFor, screen } from '@testing-library/react';
import { product, productStyles } from '../data/POMockData.js';
import '@testing-library/jest-dom';
import Info from '../../src/components/po_components/Info.jsx';

/* const product = */
const scrollToReviews = () => {
  console.log('placeholder for scroll to reviews, invoked');
};

const averageRating = 3.8;
const averageStarRating = 3.8;
const reviewCount = 378;

describe('Product Review example tests', () => {
  test('Displays product name "Camo Onesie" in product info', async () => {
    render(
      <Info
        product={product}
        selectedStyle={productStyles.results[0]}
        scrollToReviews={scrollToReviews}
        averageRating={averageRating}
        reviewCount={reviewCount}
        averageStarRating={averageStarRating}
      />,
    );
   /*  await waitFor(() => screen.getByRole('heading')); */

    const productName = await waitFor(() => screen.getByText('Camo Onesie'));
/*     expect(screen.getByRole('heading', { name: /productName/i })).toHaveTextContent('Camo Onesie'); */
    expect(productName).toBeTruthy();
  });

/*   test('Displays product category "jackets" in product info', async () => {
    // console.log(productStyles.results);
    render(
      <Info
        product={product}
        selectedStyle={productStyles.results[0]}
        scrollToReviews={scrollToReviews}
        averageRating={averageRating}
        reviewCount={reviewCount}
        averageStarRating={averageStarRating}
      />,
    );
    await waitFor(() => screen.getByRole('heading'));
    expect(screen.getByRole('heading')).toHaveTextContent('Camo Onesie');
  }); */
});
