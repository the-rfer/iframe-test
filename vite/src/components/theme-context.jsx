import { useEffect, useState } from 'react';
import { ThemeContext } from '@/hooks/useTheme';

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return (
                localStorage.getItem('theme') ||
                (window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light')
            );
        }
        return 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
