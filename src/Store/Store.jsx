import {configureStore} from "@reduxjs/toolkit";
import Data from "./Slices/Data"
const Store=configureStore({
    reducer:{
        Data:Data
    }
});
export default Store;