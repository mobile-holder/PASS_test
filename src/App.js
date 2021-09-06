import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './colors/Main';
import Navigation from './navigations/index';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <StatusBar></StatusBar>
            <Navigation></Navigation>
        </ThemeProvider>
    );
};
export default App;