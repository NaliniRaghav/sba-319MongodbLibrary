MongoDB Database Application: Books, Authors, and Users

This application is a Node.js and MongoDB-based API for managing a collection of books, authors, and users. The API provides full CRUD operations on these data collections.

Packages to Install: express, mongoose, dotenv, nodemon Database created :  MongoLibraryDb

API Routes
Books API Endpoints
Get All Books
Method: GET
URL: http://localhost:3000/api/books
Sample Response:[
  {
    "_id": "670f30a6c749c6444b6829e4",
    "title": "Sample Book",
    "author": {
      "_id": "507f191e810c19729de860ea",
      "name": "Sample Author"
    },
    "publishedYear": 2021
  }
]

Get a Book by ID
Method: GET
URL: http://localhost:3000/api/books/670f30a6c749c6444b6829e4
Sample Response: {
  "_id": "670f30a6c749c6444b6829e4",
  "title": "Sample Book",
  "author": {
    "_id": "507f191e810c19729de860ea",
    "name": "Sample Author"
  },
  "publishedYear": 2021
}
Add a New Book
Method: POST
URL: http://localhost:3000/api/books
Sample Request Body: {
  "title": "New Book",
  "author": "507f191e810c19729de860ea",
  "publishedYear": 2022
}

Update a Book
Method: PUT
URL: http://localhost:3000/api/books/670f30a6c749c6444b6829e4
Sample Request Body: {
  "title": "Updated Book Title",
  "author": "507f191e810c19729de860ea",
  "publishedYear": 2023
}

Delete a Book
Method: DELETE
URL: http://localhost:3000/api/books/670f30a6c749c6444b6829e4
Plug these into Postman and you’ll be all set for testing the book routes. Anything else?
Authors API Endpoints
Get All Authors
Method: GET
URL: http://localhost:3000/api/authors
Sample Response:[
  {
    "_id": "670f30a6c749c6444b6829e4",
    "name": "Jane Doe",
    "bio": "Bio 1",
    "birthdate": "1980-01-01T00:00:00.000Z",
    "books": ["Book1", "Book2"]
  }
]Author End Points:   

Get an Author by ID
Method: GET
URL: http://localhost:3000/api/authors/670f30a6c749c6444b6829e4
Sample Response:{
  "_id": "670f30a6c749c6444b6829e4",
  "name": "Jane Doe",
  "bio": "Bio 1",
  "birthdate": "1980-01-01T00:00:00.000Z",
  "books": ["Book1", "Book2"]
}
Add a New Author
Method: POST
URL: http://localhost:3000/api/authors
Sample Request Body:{
  "name": "John Smith",
  "bio": "New Author Bio",
  "birthdate": "1975-05-20T00:00:00.000Z"
}
Update an Author
Method: PUT
URL: http://localhost:3000/api/authors/670f30a6c749c6444b6829e4
Sample Request Body: {
  "name": "Jane Doe Updated",
  "bio": "Updated Bio",
  "birthdate": "1980-01-01T00:00:00.000Z"
}

Delete an Author
Method: DELETE
URL: http://localhost:3000/api/authors/670f30a6c749c6444b6829e4
Use these with Postman, and you’re all set for testing the author routes. Anything else?

Users API Endpoints
Get All Users
Method: GET
URL: http://localhost:3000/api/users
Sample Response: [
  {
    "_id": "670f30a6c749c6444b6829e4",
    "name": "Jane Doe",
    "borrowedBooks": [
      {
        "_id": "507f191e810c19729de860ea",
        "title": "Sample Book",
        "publishedYear": 2021
      },
      {
        "_id": "507f191e810c19729de860eb",
        "title": "Another Sample Book",
        "publishedYear": 2022
      }
    ]
  }
]

Get a User by ID
Method: GET
URL: http://localhost:3000/api/users/670f30a6c749c6444b6829e4
Sample Response: {
  "_id": "670f30a6c749c6444b6829e4",
  "name": "Jane Doe",
  "borrowedBooks": [
    {
      "_id": "507f191e810c19729de860ea",
      "title": "Sample Book",
      "publishedYear": 2021
    },
    {
      "_id": "507f191e810c19729de860eb",
      "title": "Another Sample Book",
      "publishedYear": 2022
    }
  ]
}

Add a New User
Method: POST
URL: http://localhost:3000/api/users
Sample Request Body: {
  "name": "John Smith",
  "borrowedBooks": ["507f191e810c19729de860ea", "507f191e810c19729de860eb"]
}

Update a User
Method: PUT
URL: http://localhost:3000/api/users/670f30a6c749c6444b6829e4
Sample Request Body: {
  "name": "Jane Doe Updated",
  "borrowedBooks": ["507f191e810c19729de860ea"]
}

Delete a User
Method: DELETE
URL: http://localhost:3000/api/users/670f30a6c749c6444b6829e4



GitHub Repository
Repository URL: https://github.com/NaliniRaghav/sba-319MongodbLibrary 

