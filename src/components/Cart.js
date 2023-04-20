import React ,{useState} from "react";
import "../App"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus , faTrash , faIndianRupeeSign}  from '@fortawesome/free-solid-svg-icons'
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router";

const Cart = () => {

    const [buttonText, setButtonText] = useState("Place Order")

    const {carts, addToCarts, removeFromcarts ,total, emptyCart } = useAppContext()

    const totalValue = total.toFixed(2)

    const inrTotal = (totalValue * 88).toFixed(2)

    const Navigate = useNavigate()

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            alert("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    const cartChecker = (id) => {
        const bool = carts.some((book) => book.id === id);
        return bool
    }


    return (
        <div className="carts">

{carts.length > 0 ?
                carts.map((book) => (

                    
                    <div key={book.id} className="cart-id">
                       
                       <div><img src={book.image_url} alt="#"/></div>

                       <div className="cart-title"><h2>{book.title}</h2></div>

                       <div className="book-icon">
                           <div className="carts-icons">
                           { cartChecker(book.id) ?
                             <FontAwesomeIcon icon={faTrash} onClick={ () => removeFromcarts(book.id,book.rating) } />
                              : 
                             <FontAwesomeIcon icon={faCartPlus} onClick={() => addToCarts(book)}  />
                           }  
                           </div> 
                       </div>
                       
                        <div className="cart-price">
                           <p>Price : $ {book.rating}</p>
                        </div>
                    </div>    
                )
           ) :  <h1 className="cart-text"> You have no books in your Cart</h1>  }
            
            <div className="total-text">
               {carts.length > 0 ? <h2>Total : ${totalValue}    <FontAwesomeIcon icon={faIndianRupeeSign} />{inrTotal}</h2> 
                          : <h2></h2>}
            </div>
 
            
            <div className="cart-button">
               {carts.length > 0 ? 
                <button onClick={() => Navigate("/")}>
                    <span>Continue Shopping</span>
                </button> 
            :   <h2></h2>  }
            </div>


            <div className="order-button">
                {carts.length > 0 ? 
                <button onClick={placeOrder}>{buttonText}</button> 
                : 
                <button onClick={() => Navigate("/")} className="cart-button-shop">
                     <span>Continue Shopping</span>
                </button> }
            </div>
           
        </div>
    )
}


export default Cart;