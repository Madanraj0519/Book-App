import React ,{ useEffect, useState } from "react";
import "../App";
import  axios  from "axios";
import { Book_URl } from "./API";
import { useParams } from "react-router";
import { useNavigate } from "react-router";



const BookDetails = () => {

    const Navigate = useNavigate()

    const [book , setBooks] = useState({})

    const {id} = useParams()

    useEffect(() => {

        axios.get(`${Book_URl}/${id}`)
        .then(res => {
            setBooks(res.data)
        })
        .catch(err => console.log(err))
        },[id]);



    return (
        <div className="book-details">
          <div className="book-border">
            <div className="book-image">
               <img src={book?.image_url} onClick={() => Navigate("/")} alt="#" />
            </div>
          <div className="book-poster">
            <h2 className="title">{book?.title}</h2>
            <h2 >Description</h2>
              <p>{book?.description}</p>
            <h2>Authors</h2>
              <p>{book?.authors}</p>
            <h2>Genres</h2>
              <p>{book?.genres}</p>
          </div>
         </div>
        </div>
    )
}


export default BookDetails;