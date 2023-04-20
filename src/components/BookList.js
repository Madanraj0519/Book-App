import React ,{useState , useEffect} from "react";
import "../App"
import { API_URL } from "./API";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart , faCartPlus , faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router";



const BookList = () => {

    const [books , setBooks] = useState([])

    const {favorites , addToFavorite, removeFromFavorite,
           carts, addToCarts, removeFromcarts, } = useAppContext()

    const Navigate = useNavigate()


    const favoritesChecker = (id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean
    }

    const cartChecker = (id) => {
        const bool = carts.some((book) => book.id === id);
        return bool
    }

    useEffect( () => {

        axios.get(API_URL)
        .then(res => {
        console.log(res.data)
        setBooks(res.data)})
        .catch(err => console.log(err))

    },[]);

    return  <div className="book-list">
            {
                books.map((book) => (

                    <div key={book.id} className="book-id">

                        <div>
                            <h2>{book.title}</h2>
                        </div>

                        <div>
                            <img src={book.image_url} alt="#" onClick={() => Navigate(`/Books/${book.id}`)}/>
                        </div>

                        <div className="book-icon">
                            <div className="hearts-icon">
                            { favoritesChecker(book.id) ?
                                    <FontAwesomeIcon icon={faHeart} onClick={() => removeFromFavorite(book.id)}
                                 style={{color: "#f2071f",}} />
                            :
                                   <FontAwesomeIcon icon={faHeart} onClick={() => addToFavorite(book)}
                                style={{color: "#1a1919",}} />
                            }    
                            </div>

                            <div className="carts-icon">
                            { cartChecker(book.id) ?
                               <FontAwesomeIcon icon={faCircleCheck} onClick={() => removeFromcarts(book.id ,book.rating)} style={{color: "#3f8d76",}} />
                                : 
                               <FontAwesomeIcon icon={faCartPlus} onClick={() => addToCarts(book)}  />

                            }  
                            </div> 
                        </div>

                        <div className="book-price">
                            <p>Price : $ {book.rating}</p>
                        </div>
                    </div>
                )
                ) }
            </div>;
};


export default BookList;