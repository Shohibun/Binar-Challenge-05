import { actionsType } from "../constant/actionsType"

export const dataMobilActions = (data) => {
    return {
        type: actionsType.SET_DATA_MOBIL, 
        payload: data
    }
}

export const dataDetailMobilActions = (data) => {
    return {
        type: actionsType.SET_DETAIL_MOBIL, 
        payload: data
    }
}

//untuk memanggil beberapa data 
