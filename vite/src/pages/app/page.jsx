import { Outlet } from 'react-router';
import { DesktopNav, MobileNav } from '@/components/navbar';
import { useIsMobile } from '@/lib/useMobile';

export default function App() {
    const isMobile = useIsMobile();

    return (
        <div className='w-full h-screen'>
            <DesktopNav />
            <Outlet />
            <MobileNav />
        </div>
    );
}
