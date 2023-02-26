import React from 'react'

const Book = ( { bookData } ) => {

    console.log(bookData.volumeInfo);

    var thumbnail= bookData.book_image
  return (
    <>
        <div className='inline-block items-center cursor-pointer p-2'>
           <a href={bookData.amazon_product_url}>
            <img className='h-[200px] w-[147px] block border-2 border-palette-4 rounded-md shadow-md'
             src={thumbnail} 
             alt={bookData.title}/>
            </a>
        </div>
        
    </>


  )
}

export default Book;