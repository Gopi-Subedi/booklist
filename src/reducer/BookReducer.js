export const BookReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_BOOK' :
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: Math.random()*1000 
            }]
        case 'REMOVE_BOOK' :
            return state.filter(s =>s.id !== action.id)
        
        default :
            return state
    }
}