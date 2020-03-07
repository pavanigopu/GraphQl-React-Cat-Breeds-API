# GraphQL Javascript API

This is a very simple cat breeds service developed with graphql, javascript and MongoDB technologies. The service can be accessed from localhost at PORT 5000. The port can be changed in app.js if needed.

# Get started

1. Install [Node.js](https://nodejs.org/en/download/current/).

2. Install dependencies and start the server.
    Run this command from command prompt to install the needed packages and start the server.
    ```
    $ npm install && npm run start
    ```

# Testing the API

   Open the url http://localhost:5000/graphql
   Note: Same port has to be used if different port is used in app.js
   Below are the different APIs.

1. Get all breeds
    ```
    query {breeds{_id name description temperament origin}}
    ```
2. Get breed by id
    ```
    query {breedById(id:"5e6019b5292a0003e87558bc"){_id, name description temperament origin}}
    ```
3. Search breeds by name
    ```
    query {searchByName(name:"American"){_id, name description temperament origin}}
    ```
4. Filter breeds by origin
    ```
    query {filterByOrigin(origin: "United states"){_id, name description temperament origin}}
    ```
5. Filter breeds by both name and origin
    ```
    query {filterBreeds(search:"", origin:"United States"){_id, name description temperament origin}}
    ```
6. Get available origins
    ```
    query {origins}
    ```
7. Add new breed
    ```
    mutation {createBreed(breedInput: { name: "Test cat", description: "testing mutation", temperament:"hign", origin: "India"}){name}}
    ```

# Understanding the repository structure

* `app.js` Start of the service.
* `graphql/schema` folder holds the graphql schema.
* `graphql/resolvers` folder holds the graphql API resolvers.
* `models` folder holds the schema for mongoDB database.

# Questions

Questions at any phase, please send email to pavani.vaka@gmail.com
