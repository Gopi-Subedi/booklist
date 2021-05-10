import { useContext, useState } from "react"
import { BookContext } from "../context/BookContext"

const AddBookForm = () =>{
    const { dispatch } = useContext(BookContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            dispatch({type: 'ADD_BOOK', book:{
                title, author
            }});
            setTitle('');
            setAuthor('');
            }}>
            <input onChange={(e)=>setTitle(e.target.value)}
                type="text" 
                placeholder="Title..." 
                required 
                value={title}
            />
            <input onChange={(e)=>setAuthor(e.target.value)}
                type="text" 
                placeholder="Author..." 
                required 
                value={author}
            />
            <button>Add Book</button>
        </form>
    )
}

export default AddBookForm;