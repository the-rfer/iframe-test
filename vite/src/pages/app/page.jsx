import { DesktopNav, MobileNav } from '@/components/navbar';
import { Outlet } from 'react-router';

export default function App() {
    return (
        <div className='w-full h-screen'>
            <DesktopNav />
            <Outlet />
            <MobileNav />
        </div>
    );
}
