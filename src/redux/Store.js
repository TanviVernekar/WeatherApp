import {combineReducers,configureStore} from '@reduxjs/toolkit'
import WeatherReducer from './WeatherSlice'
import WeatherSlice from './WeatherSlice';
import persistReducer from 'redux-persist/es/persistReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'



const persistConfig={
    key:'root',
    version:1,
    storage:AsyncStorage,
  }

  const reducer=combineReducers({
    favourite:WeatherReducer
  });

  const persistRed = persistReducer(persistConfig,reducer);

  export default configureStore({
    reducer:persistRed,
    middleware:getDefaultMiddleware=>
      getDefaultMiddleware({
        serializableCheck:false,
      }),
  });
// export const Store = configureStore({
//     reducer:{
//         favourite:WeatherReducer
//     }
// })