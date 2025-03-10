// write the book component code here


function Bookcard(book) {
  return (
    <div>
        <p>{book.name}</p>
        <img src={book.image} alt="" />
        <p>{book.author}</p>
        <p>{book.genre}</p>
    </div>
  )
}

export default Bookcard