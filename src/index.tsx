import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import store from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    <GlobalStyles />
  </ThemeProvider>
);