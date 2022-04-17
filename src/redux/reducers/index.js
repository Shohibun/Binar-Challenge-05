import { combineReducers } from "redux";
import { dataDetailMobilReducer, dataMobilReducer } from "./dataMobilReducer";

const gabunganReducers = combineReducers({
    dataMobilBinar: dataMobilReducer,
    dataDetailMobilBinar: dataDetailMobilReducer
})

export default gabunganReducers;

//untuk menggabungkan beberapa data 