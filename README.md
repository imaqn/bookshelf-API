# bookshelf-API
API to create, read, update and delete books data in an array. Created to complete Backend for Beginners class in Dicoding Academy.

## How to install
1. clone this repository
2. type `npm i` to install npm
3. type `npm run start` to  start the API

## How to use
#### to add a book
- method: POST
- path: /books
- body: `{
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
}`

#### to show all books
- method: GET
- path: /books
- add query ?reading with 0 or 1 value to get books by reading status
- add query ?finish with 0 or 1 value to get books by finish status
- add query ?name with 'name' value to get books contains 'name'

#### to get a book by its ID
- method: GET
- path: /books/{bookId}

#### to update a book
- method: PUT
- path: /books/{bookId}
- body: `{
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
}`

#### to get a book
- method: DELETE
- path: /books/{bookId}
