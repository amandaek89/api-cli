const axios = require('axios');

// Create a global Axios-instans with base-URL and timeout
const api = axios.create({
    baseURL: 'http://webbooks-env.eba-v82kmmpj.eu-north-1.elasticbeanstalk.com',
    timeout: 10000,
});

// ------------------------------------
// Books Functions
// ------------------------------------

// Fetch all books
async function getBooks() {
    try {
        const response = await api.get('/books');
        console.log('Books:', response.data);
    } catch (error) {
        handleError(error, 'fetching all books');
    }
}

// Fetch a book by ID
async function getOneBook(id) {
    try {
        const response = await api.get(`/books/${id}`);
        console.log(`Book with ID ${id}:`, response.data);
    } catch (error) {
        handleError(error, `fetching book with ID ${id}`);
    }
}

// Fetch a book by title
async function getBookByTitle(title) {
    try {
        const response = await api.get(`/books/title/${title}`);
        console.log(`Book with title "${title}":`, response.data);
    } catch (error) {
        handleError(error, `fetching book with title "${title}"`);
    }
}

// Save a new book
async function saveBook(bookCreateDto) {
    try {
        const response = await api.post('/books', bookCreateDto);
        console.log('Book created:', response.data);
    } catch (error) {
        handleError(error, 'saving book');
    }
}

// Update an existing book
async function patchBook(id, bookDto) {
    try {
        const response = await api.patch(`/books/${id}`, bookDto);
        console.log(`Book with ID ${id} updated:`, response.data);
    } catch (error) {
        handleError(error, `updating book with ID ${id}`);
    }
}

// Delete a book by ID
async function deleteBook(id) {
    try {
        await api.delete(`/books/${id}`);
        console.log(`Book with ID ${id} deleted.`);
    } catch (error) {
        handleError(error, `deleting book with ID ${id}`);
    }
}

// Delete all books
async function deleteAllBooks() {
    try {
        await api.delete('/books');
        console.log('All books deleted.');
    } catch (error) {
        handleError(error, 'deleting all books');
    }
}

// ------------------------------------
// Authors Functions
// ------------------------------------

// Get all authors
async function getAllAuthors() {
    try {
        const response = await axios.get('http://webbooks-env.eba-v82kmmpj.eu-north-1.elasticbeanstalk.com/authors');
        console.log('Authors:', response.data);
    } catch (error) {
        console.error('Error fetching authors:', error.message);
    }
}

// Get an author by ID
async function getOneAuthor(id) {
    try {
        const response = await axios.get('http://webbooks-env.eba-v82kmmpj.eu-north-1.elasticbeanstalk.com/authors/id/${id}');
        console.log(`Author with ID ${id}:`, response.data);
    } catch (error) {
        console.error(`Error fetching author with ID ${id}:`, error.message);
    }
}

// Get an author by name
async function getAuthorByName(name) {
    try {
        const response = await axios.get('http://webbooks-env.eba-v82kmmpj.eu-north-1.elasticbeanstalk.com/authors/name/${name}');
        console.log(`Author with name ${name}:`, response.data);
    } catch (error) {
        console.error(`Error fetching author with name ${name}:`, error.message);
    }
}

// Save a new author
async function saveAuthor(authorData) {
    try {
        const response = await axios.post('http://webbooks-env.eba-v82kmmpj.eu-north-1.elasticbeanstalk.com/authors/', authorData);
        console.log('Author created:', response.data);
    } catch (error) {
        console.error('Error saving author:', error.message);
    }
}

// Update an existing author
async function updateAuthor(id, authorData) {
    try {
        const response = await axios.patch('http://webbooks-env.eba-v82kmmpj.eu-north-1.elasticbeanstalk.com/authors/id/${id}', authorData);
        console.log(`Author with ID ${id} updated:`, response.data);
    } catch (error) {
        console.error(`Error updating author with ID ${id}:`, error.message);
    }
}

// Delete an author by ID
async function deleteAuthor(id) {
    try {
        await axios.delete('http://webbooks-env.eba-v82kmmpj.eu-north-1.elasticbeanstalk.com/authors/${id}');
        console.log(`Author with ID ${id} deleted.`);
    } catch (error) {
        console.error(`Error deleting author with ID ${id}:`, error.message);
    }
}

// Felhantering för att ge mer detaljerad information
function handleError(error, action) {
    if (error.response) {
        // Servern svarade med statuskod utanför 2xx
        console.error(`Error ${action}: ${error.response.status} - ${error.response.data}`);
    } else if (error.request) {
        // Ingen respons mottogs
        console.error(`No response received when ${action}. Request details:`, error.request);
    } else {
        // Ett annat fel uppstod vid skapandet av förfrågan
        console.error(`Error ${action}:`, error.message);
    }
}

module.exports = {
    getBooks,
    getOneBook,
    getBookByTitle,
    saveBook,
    patchBook,
    deleteBook,
    deleteAllBooks,
    getAllAuthors,
    getOneAuthor,
    getAuthorByName,
    saveAuthor,
    updateAuthor,
    deleteAuthor,
};
