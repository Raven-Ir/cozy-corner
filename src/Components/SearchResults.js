import React from 'react'

const SearchResults = (data) => {
  console.log(data.data);
  
  return (
    <div className='w-auto fixed h-80 overflow-scroll scrollbar-hide drop-shadow-xl'>
      <table className=''>
      {data.data.map((book, index) => (
        <tr key={index}>
          <td><img height={85} width={65} src={book.volumeInfo.imageLinks.thumbnail} alt='book cover'/></td>
          <td>
            <p className='font-bold text-lg w-64'>{book.volumeInfo.title}</p>
            <p>{book.volumeInfo.authors}</p>
            <p>{book.volumeInfo.publishedDate}</p>
            <p>{book.volumeInfo.language}</p>
          </td>
          <td>
            <button className='but bg-palette-5 text-palette-1 p-2 rounded-xl m-2 w-28'>Add to Library</button>
            <br></br>
            <button className='but bg-palette-1 font-bold text-palette-5 p-2 rounded-xl m-2 w-28'>Details</button>
          </td>
        </tr>
      ))}
      </table>
    </div>
  )
}

export default SearchResults

/*
  bookData.map((item, id) => (
   <SearchResults data={item.volumeInfo}  key={id}/> 
  ))}

  const title = data.data.title;
  const imageUrl = data.data.imageLinks && data.data.imageLinks.thumbnail;
  const author = data.data.authors;
  const date = data.data.publishedDate;
  const language = data.data.language;
*/