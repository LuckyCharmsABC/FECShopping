# FECShopping
 - This project is meant to simulate an online retailing site (dubbed 'Lucky and Charm'), and is split into three sections: Product Overview, Related Items, and Ratings and Reviews

## Setup
 - Run `npm install` or `npm i`
 - Run `npm run server-dev` and `npm run client-dev` in two separate terminals
 - Navigate to `localhost:3000` in your browser

## Product Overview

- Created by Boyi Qu

This section includes an image gallery that displays pictures of the current item; a product information section that displays current item’s basic information and a section where users can select different styles, sizes and quantities to add the selected items to shopping bag.

### Image Gallery

This section displays pictures of the current product. It can be displayed in default or expanded view.

**Default view:** Consists of a high resolution main image and a list of thumbnail images on the left

- Each style has its own image Gallery. Select a desired style and the image gallery will update.
- Users can navigate among images using the following methods:
    - Click on the left and right arrows located on the left and right sides of the main image
    - Click on a thumbnail image in the list to navigate to the corresponding main image
    - To make hidden thumbnails visible
        - Click on the up and down arrows located on the top and bottom of the thumbnail list
        - Or place the pointer on the list and scroll up and down
- Clicking on the main image (mouse shows magnifying glass plus sign) will open expanded view of the image gallery

**Expanded View:** Consists of the main image and navigation dot buttons on the bottom

- Users can navigate among images using the following methods:
    - Click on the left and right arrows
    - Click on a navigation dot button to navigate to the corresponding main image
- Clicking on the main image (mouse shows plus sign) will zoom the main image by 2.5 times at the clicked location, moving the mouse around after clicking will allow the image to following mouse movement
- Clicking the zoomed-in main image (mouse shows minus sign) will bring image back to normal scale
- Close the expanded view by clicking on the cross on the top right.

### Product Information

This section displays basic information of the current product

- If the product has any reviews or ratings, average rating and total number of reviews will be displayed at the top.
- Clicking on Read all xx reviews will bring the page to Ratings and Reviews section
- Different styles of the same product may have different prices. Select a desired style to see the most accurate price
- If a style is on sale, the sale price is displayed in red and original price is displayed in black, struck through.
- Product slogan, description and features are displayed below the image gallery, above the related items.

### Style selector and Add to Cart

This section includes a list of all available styles’ thumbnail images, a dropdown list for selecting sizes, a dropdown list for selecting quantities and a “ADD TO BAG” button.

- Select a style by clicking on the style’s thumbnail image; the selected style name will be displayed above the thumbnail images
- Each style may have different available sizes and quantities. If a size is not displayed in the dropdown list, then it’s not available.
- If the size dropdown list displays “OUT OF STOCK”, none of the sizes are available
- To add items to cart, users must select a size. When a size is selected, the default quantity is set to 1.
- Users can change the quantity as needed, but only up to 15 or current available stock number
- Once the desired style, size and quantity are selected, clicking on “ADD TO BAG” will add the items to cart.

## Related Items and Outfit Items
 - Created by Connor Fung
 - There are two main features in Related Items: Related Items and Outfit Items

 ### Related Items
 - This section displays a carousel of items that are related to the Product currently being viewed in the 'Product Overview'.
 - The user can scroll the carousel either by using a scroll wheel on a mouse or trackpad, or by clicking on the arrow buttons on the left and right side of the carousel.
 - The user can click on any of the cards in the carousel to look at make that card the currently viewed product.
   - In addition to updating the Product Overiew, the page will autoscroll to the top so the user can view the new product.
 - Each card in the carousel displays the following information about the item:
   - An image of the item. This will display a stock image if no images are available for the product.
   - The category of the item (ie. Pants, Jackets, BackPack, etc)
   - The price of the item. If the item is on sale this will show the sale price in red, next to the original price, which will have a strikethrough effect.
   - The average rating of the product, displayed as a star rating. The star ratings show in .25 increments.
 - Clicking on the star button in the top right of item card will bring up a comparison modal which shows the combined characteristics of each of the related item and the item currently being viewed in the Product Overview.
 - If the current item has no related items, nothing is rendered in this component.

 ### Outfit Items
 - This section also displays a carousel of items, however the items in this list are decided by the user of the website.
 - Just like the Related Item carousel, the user can scroll the carousel either by using a scroll wheel on a mouse or trackpad, or by clicking on the arrow buttons on the left and right side of the carousel.
 - This Outfit List is persistent per user, so each users list will be different and all will be persistent for that specific user.
 - On the leftmost position of the carousel is an 'Add to Outfit' button that allows the user to add the currently viewed product to their own list of items.
 - The cards are styled and contain the same information as the cards in the Related Item carousel with one exception:
   - Rather than displaying a comparison, the Action Button in the top right of the card removes that card from the user's Outfit List.

## Ratings and Reviews
 - Created by Sam Boonzaayer
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
