import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import router from '@/router/router';
import '@/css/index.css';
import { ThemeProvider } from '@/components/theme-context';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
);
