import { actionsType } from "../constant/actionsType";

const initialState = {
    data: []
}

export const dataMobilReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionsType.SET_DATA_MOBIL:
            
            return {...state, data: payload};
    
        default:
            return state;
    }
}

export const dataDetailMobilReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionsType.SET_DETAIL_MOBIL:
            
            return {...state, data: payload};
    
        default:
            return state;
    }
}

//untuk menambahkan data 