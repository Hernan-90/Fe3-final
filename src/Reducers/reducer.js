export const reducer = ( state, action ) => { 
    let algo = false
    switch (action.type) {
        case 'THEME_LIGHT':
            return { ...state, theme: 'light' };
        case 'THEME_DARK':
            return { ...state, theme: 'dark' };
        case 'GET_LIST':
            return { ...state, odontologosList: action.payload };
        case 'GET_ODONTOLOGO':
            return { ...state, odontologoData: action.payload };
        case 'ADD_FAV':
            return { 
                    ...state, 
                    favs: state.favs.some( fav => fav.id === action.payload.id ) 
                        ? state.favs
                        : [...state.favs, action.payload]
                    };
        case 'DELETE_FAV':
            return {...state, favs: state.favs.filter( (fav) => fav.id !== action.payload ) };
    }
}