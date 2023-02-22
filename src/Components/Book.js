import React from 'react'

const Book = ( { bookData } ) => {

    console.log(bookData.volumeInfo);

    var thumbnail= bookData.volumeInfo.imageLinks && bookData.volumeInfo.imageLinks.thumbnail;
  return (
    <>
        <div className='inline-block items-center cursor-pointer'>
            <img className='w-32 min-w-min h-fit block border-2 border-palette-4 rounded-md shadow-md'
             src={thumbnail} 
             alt={bookData.volumeInfo.title}/>
        </div>
        
    </>


  )
}

export default Book;