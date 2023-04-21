import React, { useState ,useEffect} from 'react'
import { useFetch } from './useFecth';
import Book from './Book';  
import "./Book.css"
function Books() {
  const subjects = ['fiction', 'love', 'Travel', 'Women'];
  const [books, setBooks] = useState([]);
  const [all, setAll] = useState([]);
  
  useEffect(() => {
    const fetchBooks = async () => {
      const bookResponses = await Promise.all(subjects.map((s) =>
        fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${s}&startIndex=0&maxResults=5`)
          .then((res) => res.json())
      ));
      setBooks(bookResponses);
    };
    fetchBooks();
  }, []);
  
  useEffect(() => {
    var arr = [];
    for (let bk of books) {
      for (let each of bk.items) {
        arr.push(each.volumeInfo);
      }
    }
    setAll(arr);
  }, [books]);


  console.log(all);

  return (
    <div className='display'>
      {all.map(each => (
        <Book book = {each}  />
      ))}
    </div>
  );
}

export default Books;
