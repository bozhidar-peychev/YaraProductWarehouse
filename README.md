# YaraProductWarehouse

## Development Scenario – Product Warehouse

### Technologies:

Type Script/JavaScript

NodeJS

ReactJS

GraphQL – Apollo server

PostgreSQL

Rest API

Abstract

### Intro

A customer has a number of warehouses. They wish to track the movement of stock in and out of each warehouse. A warehouse has a particular size, this represents the maximum stock amount allowed in this warehouse. Each warehouse is stocked with products. Products have a size per unit amount. Products can be imported, or exported from a warehouse at which point the product, amount and date are recorded. The customer has hazardous and non-hazardous products. It is very important that hazardous products are not kept in the same warehouse as non-hazardous products. Imports can be in the future or the past. The customer will want to see what the current stock level is in a warehouse and what stock space is remaining.

### Requirement

Build a small stock management application, consisting of two pages. It must be written in ReactJS consuming GraphQL Api (Apollo Server). The GraphQL Api should call another REST Api only for calculation operations (you can find one open source or create one by yourself, your choice).The data should be stored in PostgreSQL. The applications should be written in TypeScript or JavaScript.

#### Screen 1;

Product entry screen. Allows the user to quickly add products to the master products list and see a full list of the product list.

#### Screen 2;

Warehouse stock movement screen. A user can switch between warehouses within the page. The page must show the current stock amount, free stock space remaining. The user can see a historic list of Imports and exports as well as add a new import or export.

### Note

This is an open scenario designed to test your knowledge and use of both front end and back end technologies. The requirements are simplistic in order for you to use some imagination. Assume that you already have a data structure containing your list of warehouses. Nice things to see within the code are as follows; Design Patterns, Validation, Responsive layout, Architectural design, Relational Database structure. Front end styling libraries are your choice although standard bootstrap is perfectly fine.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
