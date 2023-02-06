import { legacy_createStore as createStore} from 'redux'
import { Authreducer } from '../reducer/reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
  }
  const persistedReducer = persistReducer(persistConfig, Authreducer)
// export const store = createStore(Authreducer);

    export let store = createStore(persistedReducer)
    export let persistor = persistStore(store)
   
  
