import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './src/navigations/Navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';

function App() {

  return (
    <Provider
      store={store}
    >
      <NavigationContainer
        theme={{
          colors: {
            background: '#0e0f12'
          }
        }}
      >
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'#0e0f12'}
        />
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
