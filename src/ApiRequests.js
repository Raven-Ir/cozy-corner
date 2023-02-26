const nytKey = process.env.REACT_APP_NYT_API_KEY

// const requestsGenreGoogleAPI = {
//     romance : `https://www.googleapis.com/books/v1/volumes?q=subject:romance`,
//     fiction : `https://www.googleapis.com/books/v1/volumes?q=subject:fiction`,
//     fantasy : `https://www.googleapis.com/books/v1/volumes?q=subject:fantasy`,
//     crime : `https://www.googleapis.com/books/v1/volumes?q=subject:crime`,
//     physics : `https://www.googleapis.com/books/v1/volumes?q=subject:physics`,
//     science : `https://www.googleapis.com/books/v1/volumes?q=subject:science`,
// }

const requestsBestSellerNYT = {
    overview : `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${nytKey}`,
    hardcoverFiction: `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${nytKey}`,
    hardcoverNonFiction: `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=${nytKey}`,
    paperbackNonFiction: `https://api.nytimes.com/svc/books/v3/lists/current/paperback-nonfiction.json?api-key=${nytKey}`,
    youngAdult: `https://api.nytimes.com/svc/books/v3/lists/current/young-adult.json?api-key=${nytKey}`,
    bookSeries: `https://api.nytimes.com/svc/books/v3/lists/current/series-books.json?api-key=${nytKey}`,
}

export default  requestsBestSellerNYT;