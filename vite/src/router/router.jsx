import { DesktopNav, MobileNav } from '@/components/navbar';
import Page from '@/pages/app/index';
// import App from '@/pages/app/page.jsx';
import Contacts from '@/pages/contact/page';
import Festa from '@/pages/festa/page';
import Index from '@/pages/index/page.jsx';
import Information from '@/pages/info/page';
import Maps from '@/pages/maps/page';
import Media from '@/pages/media/page';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/app',
        // element: <App />,
        children: [
            {
                index: true,
                element: (
                    <>
                        <DesktopNav />
                        <Page />
                        <MobileNav />
                    </>
                ),
            },
            {
                path: 'map',
                element: (
                    <>
                        <DesktopNav />
                        <Maps />
                        <MobileNav />
                    </>
                ),
            },
            {
                path: 'info',
                element: (
                    <>
                        <DesktopNav />
                        <Information />
                        <MobileNav />
                    </>
                ),
            },
            {
                path: 'contact',
                element: (
                    <>
                        <DesktopNav />
                        <Contacts />
                        <MobileNav />
                    </>
                ),
            },
            {
                path: 'midia',
                element: (
                    <>
                        <DesktopNav />
                        <Media />
                        <MobileNav />
                    </>
                ),
            },
            {
                path: 'festa',
                element: (
                    <>
                        <DesktopNav />
                        <Festa />
                        <MobileNav />
                    </>
                ),
            },
        ],
    },
]);

export default router;
