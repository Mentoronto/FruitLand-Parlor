# FruitLand Parlor
This app is a work in progress for our future fruits and vegetables store that will be launching in the near future. It includes a customer side option to order some of our products that include fruits/vegetables and shakes while also including a admin/manager side that can login and manually add or remove products without having to change any code. The goal for this project is to make a shopping experience as smooth and easy as possible for both the customer and the owner.

### Overview
- This Project is a Nextjs App paired with MongoDB and the Redux toolkit.
- This app uses an external Api that allows an admin user to add or remove products in a easy fashion and also checking the status of current orders.


# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Technologies
- HTML,SCSS
- Axios
- Redux
- mongoose
- React Hooks
- React paypal

## Packages and Libraries

The following npm packages and libraries have been used

|Package        |Info           |
| ------------- |:-------------:|
| next| A React framework built ontop of Node.js enabling React based web-app functionalities such as server-side rendering & generating static sites.  |
| @reduxjs/toolkit | The Redux Toolkit package is intended to be the standard way to write Redux logic     |
| react-redux | Official React UI bindings layer for Redux. Allows React components to read data from a Redux store,dispatch actions to the store and update state.   |
| redux | A state container for Javascript applications      |
| axios | Promise based HTTP client for the browser and node.js     |
| mongoose | Is a ODM library for MongoDB     |
|react | JavaScript library for building user interfaces    |
| react-dom | Package that provides DOM-specific methods for React    |
| sharp |The typical use case for this high speed Node.js module is to convert large images in common formats to smaller, web-friendly JPEG, PNG.  |
| @paypal/react-paypal-js |Provides a solution to developers to abstract away complexities around loading the JS SDK. It enforces best practices by default so buyers get the best possible user experience.|

### LIVE VERSION
[Checkout the apps live version](https://fruit-land-parlor.vercel.app/)

