import { useContext } from "react"
import { BookContext } from "../context/BookContext"

const NavBar = () =>{

    const {books} = useContext(BookContext);
    return(
        <div className="navbar">
            <h1>Reading List</h1>
            <p>Total books: {books.length} </p>
        </div>
    )
}

export default NavBar;