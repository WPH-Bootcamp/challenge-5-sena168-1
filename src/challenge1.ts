// Define the structure for a Book object
// This creates a custom type called 'Book' with three required properties:
// - title: string (the book's title)
// - author: string (the author's name)
// - publicationYear: number (when the book was published)
type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

// Create an array to store all book objects
// This is an empty array that will only accept Book-type objects
// We initialize it as an empty array that will grow as we add books
const books: Book[] = [];

/**
 * Function to add a new book to our collection
 * @param title - The title of the book to add
 * @param author - The author of the book to add
 * @param publicationYear - The year the book was published
 * This function adds a new book object to the books array
 * Then logs a message confirming the addition to the console
 */
function addBook(title: string, author: string, publicationYear: number): void {
  // Create a new book object using the input parameters
  const newBook: Book = {
    title: title,
    author: author,
    publicationYear: publicationYear
  };

  // Add the new book to our books array using the push method
  books.push(newBook);

  // Log to console in the exact format required by the test
  // Note: The title is wrapped in quotes in the output message
  console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
}

/**
 * Function to display all books in our collection
 * This function iterates through the books array
 * And logs each book in a formatted way to the console
 */
function listBooks(): void {
  // Log header message for the list of books
  console.log("All Books:");

  // Loop through each book in the books array
  // Using forEach to process each book individually
  books.forEach((book) => {
    // Log each book in the required format: "- title by author (year)"
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  });
}

/**
 * Function to search for books by title
 * @param title - (Optional) The title to search for in book titles
 * If no title is provided, prompts the user to provide one
 * If books are found matching the title (case-sensitive), displays them
 * If no books match, indicates that no books were found
 */
function searchBook(title?: string): void {
  // Check if no title was provided (undefined)
  // If title is undefined, log a message requesting a title and return early
  if (title === undefined) {
    console.log("Please provide a title to search.");
    return; // Exit the function early since no title was provided
  }

  // Find all books whose title includes the search term (case-sensitive)
  // The filter method creates a new array with books that meet the condition
  // Using toLowerCase() on both strings would make it case-insensitive,
  // but the requirements specify it should be case-sensitive
  const matchingBooks = books.filter((book) => {
    // Return true if the book's title includes the search title
    // This performs a partial match, so searching for "Harry Potter"
    // would match "Harry Potter and the Philosopher's Stone"
    return book.title.includes(title);
  });

  // Log the search results header with the search term in quotes
  console.log(`Search Results for "${title}":`);

  // Check if we found any matching books
  if (matchingBooks.length > 0) {
    // If we found matches, log each matching book in the required format
    matchingBooks.forEach((book) => {
      // Log each matching book in the same format as listBooks
      console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
    });
  } else {
    // If no matches were found, log a message indicating this
    console.log(`No books found with title containing "${title}".`);
  }
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
