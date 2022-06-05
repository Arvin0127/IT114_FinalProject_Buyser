import React from 'react';
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/useDarkMode"
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import AnimatedRoutes from "./components/AnimatedRoutes"
import Toggle from "./components/Toggler"
import Nav from './components/Nav';


const App = () => {
    const [theme, themeToggler, mountedComponent] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;


    if (!mountedComponent) return <div />
    return (
        <ThemeProvider theme={themeMode}>
            <>
                <GlobalStyles />
                <Nav />
                <AnimatedRoutes />
            </>
            <footer className="pt-5 position-absolute top-0 start-50 translate-middle">
                <Toggle theme={theme} toggleTheme={themeToggler} />
            </footer>

        </ThemeProvider>

    )
}

export default App;