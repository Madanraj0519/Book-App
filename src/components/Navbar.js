import React from "react";
import "../App"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart , faCartShopping ,faBookJournalWhills} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useAppContext } from "./context/appContext";


const Navbar = () => {

    const { count,  carts} = useAppContext()

    return (
        <div className="navbar">
            <Link><FontAwesomeIcon icon={faBookJournalWhills} style={{color: "#53035e",fontSize:"2.8rem"}} /></Link>

            <div className="text">
                <Link to={"/Book-App"}><h1>Book App</h1></Link>
            </div>

            <div className="heart-icon">
                <Link to={"/Book/Favorite"}><FontAwesomeIcon icon={faHeart} style={{color: "#a70626"}} /></Link>
            </div>

            <div className="cart-icon">
                <Link to={"/Book/Cart"}><FontAwesomeIcon icon={faCartShopping} style={{color: "white"}}/></Link>
                <span className={carts.length > 0 ? "count":"Count"}>{count}</span>
            </div>
        </div>
    )
}


export default Navbar;