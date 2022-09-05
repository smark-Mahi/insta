import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from './Details';

export default configureStore({
    reducer:{
       details:detailsReducer,
       
    }
})