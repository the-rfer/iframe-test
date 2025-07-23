import { createBrowserRouter } from 'react-router';
import { Index } from '@/pages/index/page.jsx';
import App from '@/pages/app/page.jsx';
import Contacts from '@/pages/contact/page';
import Information from '@/pages/info/page';
import Maps from '@/pages/maps/page.jsx';
import Page from '@/pages/app/index.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/app',
        element: <App />,
        children: [
            {
                index: true,
                element: <Page />,
            },
            {
                path: 'map',
                element: <Maps />,
            },
            {
                path: 'info',
                element: <Information />,
            },
            {
                path: 'contact',
                element: <Contacts />,
            },
        ],
    },
]);

export default router;
