/* eslint-disable no-undef */
import React from 'react';
// import react-testing methods
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { product, productStyles } from '../data/POMockData.js';
import '@testing-library/jest-dom';
import Info from '../../src/components/po_components/Info.jsx';
import Cart from '../../src/components/po_components/Cart.jsx';
import Product from '../../src/components/po_components/Product.jsx';
import AddtionalInfo from '../../src/components/po_components/AdditionalInfo.jsx';

/* const product = */
const scrollToReviews = () => {
  console.log('placeholder for scroll to reviews, invoked');
};

const changeMaxQuant = () =>{
  console.log('changeMaxQuant invoked');
}

const averageRating = 3.8;
const averageStarRating = 3.8;
const reviewCount = 378;
const maxQuant = 8;

describe('Product Review Product tests', () => {
  test('Displays review counts correctly in product info', async () => {
    render(
      <Product
        currentItem={product}
        scrollToReviews={scrollToReviews}
        averageRating={averageRating}
        reviewCount={reviewCount}
        averageStarRating={averageStarRating}
      />,
    );

    const reviewNum = await waitFor(() => screen.getByText('(382'));
    expect(reviewNum).toBeTruthy();
  });
});

describe('Product Review Info tests', () => {
  test('Displays product name and category correctly in product info', async () => {
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

    const productName = await waitFor(() => screen.getByText('Camo Onesie'));
    const productCategory = await waitFor(() => screen.getByText('CATEGORY Jackets'));
    expect(productName).toBeTruthy();
    expect(productCategory).toBeTruthy();
  });

/*   test('Clicking on read all reviews will invoke scrollToReviews', async () => {
    const user = userEvent.setup();
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

    await user.click(screen.getByRole('button'));
    expect(scrollToReviews).toHaveBeenCalled();
  }); */
});

describe('Product Review Cart tests', () => {
  test('Displays add to cart and favorite correctly in cart section', async () => {
    render(
      <Cart
        selectedStyle={productStyles.results[0]}
        maxQuant={maxQuant}
        changeMaxQuant={changeMaxQuant}
      />,
    );

    const addToCart = await waitFor(() => screen.getByText('ADD TO BAG'));
    const favorite = await waitFor(() => screen.getByText('⭐️'));
    expect(addToCart).toBeTruthy();
    expect(favorite).toBeTruthy();
  });
});

describe('Product Review additional info tests', () => {
  test('Displays slogan correctly in additional info', async () => {
    render(<AddtionalInfo product={product} />);

    const slogan = await waitFor(() => screen.getByText('Blend in to your crowd'));
    expect(slogan).toBeTruthy();
  });
});


