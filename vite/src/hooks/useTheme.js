import { useContext, createContext } from 'react';

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return ctx;
};

export const ThemeContext = createContext(undefined);
