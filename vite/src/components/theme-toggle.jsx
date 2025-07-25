import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ModeToggle() {
    const [theme, setTheme] = useState(
        () =>
            localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light')
    );

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <button
            className='btn-ghost btn-circle btn'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label='Toggle theme'
        >
            {theme === 'light' ? (
                <Moon className='w-5 h-5 text-base-content/70 hover:text-base-content' />
            ) : (
                <Sun className='w-5 h-5 text-base-content/70 hover:text-base-content' />
            )}
        </button>
    );
}
