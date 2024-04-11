import { combineSlices, configureStrore} from '@reduxjs/toolkit';
import { restaurantSlice } from './entities/restaurant/index'
import { dishSlice } from './entities/dish';
import { reviewSlice } from './entities/review';
import { userSlice } from './entities/user';

export const store = configureStrore({
    reducer: combineSlices(restaurantSlice, dishSlice, reviewSlice, userSlice),
})

console.log(store.getState())