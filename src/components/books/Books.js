import React, { useState ,useEffect} from 'react'
import { useFetch } from './useFecth';


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
    }, [])
    var arr =  [];
        for(let bk of books){
            // console.log(bk.items)
            for(let each of bk.items){
                //setAll(all,...each);
                arr.push(each.volumeInfo);
                // console.log(each.volumeInfo)
            }
        }
        
    
    //console.log(books?.[0]?.items?.[0]?.volumeInfo?.title);


  return (
    <div>
        Books
        {
            all.map( (each)=>{
                <h1>{"volume"}</h1>
            } ) 
        }
  </div>
  )
}

export default Books