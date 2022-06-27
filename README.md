# Project REST-Rant

REST-Rant is an app where users can create and review restaurants.

## Live Link

[Live REST-Rant](https://limitless-castle-20301.herokuapp.com/)

## Technologies Used
  
  ### Front End
    - React
    - Sass
    - HTML
    
  ### Back End
    - MongoDb
    - Express
    - Node.JS

## Routes

| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET | / | Home page |
| GET | /places | Places index page |
| POST | /places | Create new place |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Creat a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET | * | 404 page (matches any route not defined above) |


## Restaraunt Data

- Name
- Picture
- City
- State
- Cuisine Type
