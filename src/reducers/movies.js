const initialState = {
    movies: [],
    message: ''
}

const movies = (state = initialState, action) => {
    if(action.type === 'QUERY_MOVIES'){
        let data = action.data.results;
         return {movies: data}
    }
    else if(action.type === 'CLER_MOVIES_QUERY'){
        return {movies: [], message: action.message}
    }
    return state
}

export default movies