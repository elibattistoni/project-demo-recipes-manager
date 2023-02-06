# Responsive React JS Application to manage recipes

This project was done to **practice React** and implement some nice React features.

In this app you can add and remove recipes, which are automatically organized into categories and can be filtered based on the year of publication.

# App deployment

This app was deployed on Netlify: the link to the website can be found on the right, or [here](https://elisa-recipe-manager.netlify.app/).

# React Features used in this project:

- React Context API to manage the overall state of the application (the recipes are saved in local storage)
- Custom React Hooks to validate the form for adding a recipe
- React Portals to show the modal window with the details of a recipe

# What could be done better...

No optimization of image loading (lazy loading) was implemented therefore their loading could be slower if the internet connection is not good. It is something that I will implement, though.
