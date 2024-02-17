import { configureStore } from "@reduxjs/toolkit"
import cardReducer from './store/cartSlice'
import productReducer from './store/productSlice'

const Store = configureStore({

    reducer: {
        cart: cardReducer,
        product: productReducer,
    }

})

export default Store;