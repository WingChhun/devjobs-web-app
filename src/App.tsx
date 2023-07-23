import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>
  }
]);

// Define what props.theme will look like
const theme = {
  palette: {
    primary: {
      violet: '#9e7f66',
      lightViolet: '#939BF4',
      darkBlue: '#19202D',
      midnight: '#121721'
    },
    secondary: {
      white: '#ffffff',
      lightGrey: '#F4F6F8',
      gray: '#9DAEC2',
      darkGrey: '#6E8098'
    }
  },
  typography: {
    fontFamily: 'Kumbh Sans'
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default React.memo(App);
