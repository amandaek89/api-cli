# API CLI

This project provides a command-line interface (CLI) for interacting with a book API hosted on AWS. It allows you to perform various operations on books, such as fetching, creating, updating, and deleting.

## Prerequisites

- Node.js (version 12 or higher)
- npm (Node package manager)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd api-cli
    ```
2. Install the dependencies:
   ```bash
    npm install
    ```
### Authors API Testing Examples

Below are examples of how to test the Authors API methods from the command line using Node.js.

#### Configuration
Update the `API_URL` in `authors.js` with the base URL of your Authors API:

```javascript
const API_URL = 'http://your-authors-api-url.com';
```

# API Testa Böcker och Författare

### Testa Böcker (Books)

1. ## Hämta alla böcker

   node -e "require('./index').getBooks()"
   
2. ## Hämta en bok med ID

   node -e "require('./index').getOneBook(1)"

3. ## Hämta en bok med titel

    node -e "require('./index').getBookByTitle('Bokens Titel')" 

4. ## Spara en ny bok

    node -e "require('./index').saveBook({ title: 'Ny Bok', isbn: '1234567890', authorName: 'Författarens Namn' })"
5. ## Uppdatera en befintlig bok

    node -e "require('./index').patchBook(1, { title: 'Uppdaterad Bok', isbn: '0987654321', authorName: 'Uppdaterad Författare' })"
6. ## Ta bort en bok med ID

    node -e "require('./index').deleteBook(1)" 

7. ## Ta bort alla böcker

    node -e "require('./index').deleteAllBooks()"


### Testa Författare (Authors)

1. ## Hämta alla författare

    node -e "require('./index').getAllAuthors()"

2. ## Hämta en författare med ID
    
    node -e "require('./index').getOneAuthor(3)"

3. ## Hämta en författare med namn

    node -e "require('./index').getAuthorByName('Jesper Nicoletti')" 

4. ## Spara en ny författare

    node -e "require('./index').saveAuthor({ name: 'Ny Författare', age: 45 })"

5. ## Uppdatera en befintlig författare
    
    node -e "require('./index').updateAuthor(3, { name: 'Uppdaterad Författare', age: 50 })"

6. ## Ta bort en författare med ID

    node -e "require('./index').deleteAuthor(3)" 
