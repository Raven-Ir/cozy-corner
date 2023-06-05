import React from 'react'

const SearchResults = ( data ) => {
  const title = data.data.title;
  const imageUrl = data.data.imageLinks && data.data.imageLinks.thumbnail;
  const author = data.data.authors;
  const date = data.data.publishedDate;
  const language = data.data.language;

  return (
    <>
      <table className="h-auto w-96 border-2 border-b-0 border-palette-5 rounded-t-sm">
        <tr>
          <td><img src={imageUrl} className="w-24 h-46 rounded-sm" alt="Book Cover"/></td>
          <table>
            <tr>
              <td className=' font-bold '>{title}</td>
            </tr>
            <tr>
              <td>{author}</td>
            </tr>
            <tr>
              <td>{date}</td>
            </tr>
            <tr>
              <td>{language}</td>
            </tr>
            <button className='but m-2 w-24 h-8 bg-palette-5 rounded-xl text-sm text-palette-1'> Add to Library </button>
            <button className='but m-2 w-24 h-8 bg-palette-1 rounded-xl text-sm text-palette-5'> View Details </button>
          </table>        
        </tr>
    </table>
    
    </>
  )
}

export default SearchResults