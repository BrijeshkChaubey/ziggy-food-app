import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store/store';
import {Mainnav} from './src/navigation/Mainnav';
import {PersistGate} from 'redux-persist/integration/react';



const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Mainnav />
      </PersistGate>
    </Provider>
  );
};

export default App;
