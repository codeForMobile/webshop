### Webshop

App is deployed at `https://webshop-wir3.onrender.com`

- React based online shopping app.
- Nodejs as backend with mongo cloud db as persistence.
- jwt cookie for auth and CRA build for frontend.
- Redux toolkit for state management.
- Paypal integration works.
- Multi step checkout with feature to return back to previous step.

### users

admin: admin@email.com pwd: 123456
Jhon Doe: jdoe@email.com  pwd: 123456
and others.

### Generic

DB is hosted on remote mongo db cluster but it can be configured locally to run whole setup local.

### Scripts (How to's)

- Mostly if you are starting afresh, db will already loose the seed data and hence no product will be
  avaialble on ui or via api's. To fix this, run `npm run data:import` after providing/updating correct db
  string in .env file(s), if needed.

  Once data is imported then usual script to run both frontend and backend together will be
  `npm run dev`. If no errors in console, you are good and will see landing view of the ui on frontend
  port `3000` with images of different products.

### UI

#### Product added to cart

<img
  src="./webshop.jpg"
  alt="contacts-manager-webpack"
  style="margin: 0 auto; border-radius:10px"/>

#### Landing page with carousel

<img
  src="./carousel.jpg"
  alt="carousel"
  style="margin: 0 auto; border-radius:10px"/>

#### Paypal checkout page

<img
  src="./paypal-checkout.jpg"
  alt="paypal"
  style="margin: 0 auto; border-radius:10px"/>

#### Admin profile page

<img
  src="./admin-profile.jpg"
  alt="admin profile"
  style="margin: 0 auto; border-radius:10px"/>

#### Admin product administration page

<img
  src="./admin-products.jpg"
  alt="admin product administration"
  style="margin: 0 auto; border-radius:10px"/>

#### Ratings and Reviews

<img
  src="./Ratings-Reviews.jpg"
  alt="Ratings and Reviews"
  style="margin: 0 auto; border-radius:10px"/>