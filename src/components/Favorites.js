import React from "react";
import "../App"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router";


const Favorites = () => {

    const {favorites , addToFavorite, removeFromFavorite } = useAppContext()

    const Navigate = useNavigate()


   const favoritesChecker = (id) => {
     const boolean = favorites.some((book) => book.id === id);
     return boolean
 }

    return (
        <div className="favorites">
             {favorites.length > 0 ?
                favorites.map((book) => (

                    <div key={book.id} className="book-id">

                        <div>
                            <h2>{book.title}</h2>
                        </div>

                        <div>
                            <img src={book.image_url} alt="#" onClick={() => Navigate(`/Books/${book.id}`)} />
                        </div>

                        <div className="book-icon">
                            <div className="hearts-icon">
                                { favoritesChecker(book.id) ?
                                    <FontAwesomeIcon icon={faHeart} fade onClick={() => removeFromFavorite(book.id)}
                                        style={{color: "#f2071f",}} />
                                    :
                                   <FontAwesomeIcon icon={faHeart} onClick={() => addToFavorite(book)}
                                        style={{color: "#1a1919",}} />
                                }    
                            </div>
                        </div>

                        <div className="book-price">
                            <p>Price : $ {book.rating}</p>
                        </div>   
                    </div>
                )
           ) : <h1 className="favorites-text"> You don't have any Favorites</h1> 
           }     
        </div>
    )
}


export default Favorites;