# FECShopping
 - This project is meant to simulate an online retailing site (dubbed 'Lucky and Charm'), and is split into three sections: Product Overview, Related Items, and Ratings and Reviews

## Setup
 - Run `npm install` or `npm i`
 - Run `npm run server-dev` and `npm run client-dev` in two separate terminals
 - Navigate to `localhost:3000` in your browser

## Ratings and Reviews
 - Created by Avarice Boonzaayer
 - Three main features: Overall Ratings, Review List, and New Review

### Overall Ratings
 - This section displays how the product was rated overall. It includes the average star rating from 1 - 5, as well as a visual representation of stars.
 - Directly underneath, it states what percentage of the reviews recommended the product.
 - Following that are 5 bars that show what percentage of the total ratings each star rating takes up, and up to 6 bars showing the average rating for each characteristic of the product.

### Review List
 - This section displays the products reviews, as well as the options to change the sorting method, add a review, and to show more reviews.
 - Two reviews are shown by default. Clicking "Show More" will extend this list by a further two reviews, until all reviews have been displayed, at which point the button will disappear.
 - Each review contains a star rating from 1 - 5, a summary, a body, a recommendation status, any photos the user chose to attach, a timestamp, and the options to mark the review as helpful or to report it.
 - Marking a review as helpful will increase the counter displayed next to the button, and reporting the review will hide it from the user permanently.
 - The reviews can be sorted by relevance, helpfulness, and by newest. Sorting by helpful will display the reviews with the highest helpfulness rating first, sorting by newest will display the most recent reviews first, and sorting by relevance will display a combination of the two.
 - Clicking the "Add Review" button will open up a form to create a new review.

### New Review
 - The form to create a new review will prompt the user to fill in:
   - A star rating (1 - 5) (Mandatory)
   - Whether they recommend the product (Mandatory)
   - How they rate each characteristic of the item (1 - 5) (Mandatory)
   - A summary of their review
   - The body of their review (Mandatory)
   - Any photos they wish to attach
   - A nickname (Mandatory)
   - Their email (Mandatory)
 - If any mandatory fields are left unfilled, the form will alert them with a line of red text below the input.
 - If all mandatory fields are filled out, the form will close, and the review will be submitted

## Product Overview
 - Created by Boyi Qu

## Related Items
 - Created by Connor Fung
