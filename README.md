# spotfy-platform
See all your favorite artists, albums and songs

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

[![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)

## Setting up the project

Install [nodeJs](http://nodejs.org/en/download/) on your local machine if you don't already have it

**Installing the dependencies:**
```
npm install
```

## Running the development server

```
npm start
```

The app'll be available at **http://localhost:3000**

## We use the standard styleguide, for code checking run the following code below

```
npm run lint
```

## Running the tests

```
npm test
```

## Building production package

```
npm run build
```

## Tools and libraries
 - [React 16](https://reactjs.org/)
 - [Bootstrapp 4](https://getbootstrap.com/docs/4.0)
 - [Spotify API](https://developer.spotify.com/documentation/web-api/)
 - [Ant design](https://ant.design/)
 - [Fontawesome](https://fontawesome.com)
 - [Stylus](http://stylus-lang.com/)
 - [Axios](https://github.com/axios/axios)
 - [Ramda](https://ramdajs.com)
 - [Jest](https://jestjs.io)
 - [Enzyme](https://airbnb.io/enzyme/)
 - [StandardJS](https://standardjs.com/)
 - Html5
 - Css3

## Our techniques

### High order components (HOCs)

A high order component is pretty the same as a high order funtion, but instead of receive and return functions, the HOC receive and return components! This repo contains an example of a high order function [here](https://github.com/LeonardoHabitzreuter/spotfy-platform/blob/master/src/components/overlayOnHover/index.js). For further info check the [React doc](https://reactjs.org/docs/higher-order-components.html)

### Compound components

Compound components fits well when you need to have control over the children of a component without losing its reusability. This repo contains an example of a compound component [here](https://github.com/LeonardoHabitzreuter/spotfy-platform/blob/master/src/components/dataView/index.js). In this specefic case we didn't limit the type of the component's children, but we could.

### Render props

Render props is a very common and useful React technique. [Here](https://github.com/LeonardoHabitzreuter/spotfy-platform/blob/master/src/components/browserLocation/index.js) you can see a simple example of using inside the project

### We care about the performance!

[Here](https://github.com/LeonardoHabitzreuter/spotfy-platform/blob/master/src/home/artists/list/artist.js) you can see that the `switchArtistIntoFavoritesList` method call is bound to the Artist class right into the constructor method. Why? The React makes a shallow comparation between the functions in its lifecycle, so the component render method would be called every time the React checks if the function instance is the same, the problem is it's never the same, even when the function implementation has not changed. To understand better this behavior we strongly recommend you to read the React doc [here](https://reactjs.org/docs/render-props.html)

### Functional programming? Please! We love it!
You can find the concerns and basic principles of functional programming around all the code. [Here](https://github.com/LeonardoHabitzreuter/spotfy-platform/blob/master/src/home/artists/reducers.js) and [here](https://github.com/LeonardoHabitzreuter/spotfy-platform/blob/master/src/components/rating/index.js) we have some examples of this amazing pattern called continuation.