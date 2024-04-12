import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const AppRedux = () => (
  <App/>
)
AppRegistry.registerComponent(appName, () => AppRedux);





  
     
   






