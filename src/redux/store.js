import { createStore } from "redux";
import myStorage from "redux-persist/es/storage"
import persistReducer from "redux-persist/es/persistReducer";
import gabunganReducers from "./reducers/index";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = { //set data untuk local storage
    key: "root", 
    storage: myStorage
}

const persistedReducer = persistReducer(persistConfig, gabunganReducers)

const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //untuk menampilkan state global
)

let myPersistStore = persistStore(store)

// eslint-disable-next-line import/no-anonymous-default-export
export default {store, myPersistStore};

