import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LogBox } from 'react-native';
import { Provider as AntProvider } from '@ant-design/react-native';
import { MD3LightTheme as DefaultTheme, MD3Theme, PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import ColorSystem from './configs/color/ColorSystem';
import { AppWrapperNonSync } from './dataBase/realm/AppWrapperNonSync';
import AuthRouter from './navigation/authRouter';
import store from './redux/store';


LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications



let persistor = persistStore(store);

const theme: MD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: ColorSystem.Primary,
    secondary: ColorSystem.Secondary,
  },
};



const App = () => {
  // Orientation.lockToPortrait()
  return (
    <AppWrapperNonSync>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={theme}>
            <AntProvider>
              <NavigationContainer>
                <AuthRouter />
              </NavigationContainer>
            </AntProvider>
          </PaperProvider>
        </PersistGate>
      </Provider>
    </AppWrapperNonSync>
  );
};

export default App;

