import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function ModeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className='btn-ghost btn-circle btn'
            onClick={toggleTheme}
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
