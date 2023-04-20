import { createContext , useContext, useState } from "react";

const AppContext = createContext()


export const useAppContext = () => {

    const context = useContext(AppContext)

    if(context === undefined) {
        throw new Error("AppContext is undefined")
    }
    return context
}

const AppContextProvider = ({children}) => {

    const [favorites , setFavorite] = useState([]);
    const [carts , setCarts] = useState([]);
    const [count,setCount] = useState(0);
    const [total,setTotal] = useState(0)


    const addToFavorite = (book) => {
        setFavorite( prevBOOK => [
            ...prevBOOK,book])
    }

    const removeFromFavorite = (id) => {
        setFavorite( prevBOOK => 
            prevBOOK.filter(book => book.id !== id))
    }

    const addToCarts = (book) => {
        setCarts( prevBOOK => [
            ...prevBOOK , book
        ])
        setTotal(prevTotal => prevTotal + book.rating)
        addCount()
    }

    const removeFromcarts = (id, rating) => {
        setCarts( prevBOOK => 
            prevBOOK.filter(book => book.id !== id))

        setTotal(prevTotal => prevTotal - rating)
        deleteCount()
    }

    const addCount = () => {
        setCount (prevCount => prevCount + 1)
    }

    const deleteCount = () => {
        setCount (prevCount => prevCount - 1)
    }

    const emptyCart = () => {
        setCarts([])
        setCount(0)
    }



    return (
        <AppContext.Provider value={

            { favorites , addToFavorite, removeFromFavorite,
            carts, addToCarts, removeFromcarts,
            count, addCount, deleteCount ,
            emptyCart, total }
            
        }>
            {children}
        </AppContext.Provider>
    )
}


export default AppContextProvider