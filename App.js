import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
 import store from './src/redux/Store';
import { persistor } from './src/redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
     <Provider store={store}>
      <AppNavigation />
      </Provider>
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <AppNavigation />
    //   </PersistGate>
    // </Provider>

  );
}
export default App;



