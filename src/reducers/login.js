const initialState = {
    isLogged: false
}

const login = (state = initialState, action) => {
    if(action.type === 'LOGIN'){
        return {isLogged: action.isLogged}
    }
    return state
}

export default login