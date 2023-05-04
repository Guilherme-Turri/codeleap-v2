import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import store from '../store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

export const pageRender = (children: React.ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    </ThemeProvider>);
};


