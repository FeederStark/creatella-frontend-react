This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About

This is a challenge for Creatella, you will find all the info in the readme file inside the challenge folder (just extract the zip file)

## Starting app

First, you will have to extract the file inside the challenge folder (extract it elsewhere), then, run `npm install` and `npm start` in the folder you extracted the zip file to so you will be running the api on port 3000.
After that, in the root of this repository folder run `yarn install` and `yarn start` and you will be running this on port 3001. Remember to do this after running `npm start` in the api folder, the api must be running on port 3000.

## Initial considerations about the challenge

I did a very simple layout, I believe that the functionalities were more important than the layout itself.
It was asked to sort the products by size, price and id. I did it, but I believe that the sorting by id is kinda useless, since the user doesn't see it and is just some random string (I'd rather change it to date sorting).
I thought about creating two redux files on ducks folder, making one file with the 2 advertising Types that I'm using in redux, but since it was only these two I decided not to and wrapped everything in a single duck file.
The instructions are clear about not showing the user the same Ad. I did this, but, some ads are just so similar to others (and I even think that some of them are the same) but I checked many times, and even though the image might look/be the same, they are different images.
Overall I had no problem with this challenge except with the functionality that fetches more data when the user scroll to the end of the products div and you stil haven't fetched the next products from the api. I triend using promise but didn't get to a resolution that I liked, so I ended up using a setInterval. (the code with the promise is commented there, but it does not fully work). I didn't really like the way I solved this but that's how I did it.

## Functionalities

This is a simple one-page-application where you can see a list of emojis and order them by size, price or id.

### Advertising

An add will prompt to the user when he first enter the application, and another one will be shown whenever he loads 20 more products.

### Sorting

The user can sorte the products by size, price or id. If the user clicks one of these buttons, the button will be highlithed and the products will be sorted. Selecting a new sort filter will remove the highlighting from the previous button and active in the new one. If the user had a sorting filter selected and scroll down the div to get more products, as soon as the new products are added to the products list, the button highlight is removed, since the new products are attached to the end of the products list making it not sorted anymore.

## Tools used

This is a list of the tools used to make this application.

- styled-components. This is used to style most of the application components.
- prop-types. Way of making runtime assertions about what type of data a React component requires in order to render properly.
- axios. We use axios to make the api calls.
- react-modal. Way of creating the modals.
- redux and react-redux. To use a global store and make the flux of data flow better.
- redux-saga. To make asynchronous calls.
- eslint. Eslint is used to make the code have a solid pattern.
- editorconfig. Editorconfig also helps with having a solid pattern between the devs.
- react-toastify. This is used to prompt successfull/error messages to the user after inserting/removing data.
- react-highlight-words. Used to highlight the cards tags.
