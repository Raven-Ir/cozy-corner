const nytKey = process.env.REACT_APP_NYT_API_KEY

const requestsBestSellerNYT = {
    overview : `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${nytKey}`,
    hardcoverFiction: `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${nytKey}`,
    hardcoverNonFiction: `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=${nytKey}`,
    paperbackNonFiction: `https://api.nytimes.com/svc/books/v3/lists/current/paperback-nonfiction.json?api-key=${nytKey}`,
    youngAdult: `https://api.nytimes.com/svc/books/v3/lists/current/young-adult.json?api-key=${nytKey}`,
    bookSeries: `https://api.nytimes.com/svc/books/v3/lists/current/series-books.json?api-key=${nytKey}`,
}

export default  requestsBestSellerNYT;