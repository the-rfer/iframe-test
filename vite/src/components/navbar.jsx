import { NavLink, useLocation } from 'react-router';
import { Home, MapPin, ScrollText, Info, Camera, BookOpen } from 'lucide-react';
import { ModeToggle } from '@/components/theme-toggle';
import { useTheme } from '@/hooks/useTheme';
import logo from '@/assets/logo.png';
import logoDark from '@/assets/logo-dark.png';
import icon from '@/assets/icon.png';

const navItems = [
    // { href: '/app', icon: Home, label: 'Home' },
    { href: '/app/festa', icon: BookOpen, label: 'Sobre' },
    { href: '/app/map', icon: MapPin, label: 'Localização' },
    { href: '/app/info', icon: Info, label: 'Informações' },
    { href: '/app/contact', icon: ScrollText, label: 'Publicações' },
    { href: '/app/midia', icon: Camera, label: 'Imagens' },
];

export function DesktopNav() {
    const { pathname } = useLocation();
    const { theme } = useTheme();

    return (
        <div className='bg-base-200 shadow-sm m-2 mx-auto rounded-lg max-w-full lg:max-w-[90%] navbar'>
            <div className='flex flex-row flex-1 items-center gap-2'>
                <NavLink to='/app' className='flex items-center gap-2 ml-2'>
                    <div className='pr-2 border-gray-300/50 border-r w-[120px] h-10'>
                        <img
                            src={theme === 'light' ? logo : logoDark}
                            alt='funchal.pt'
                            className='w-full h-full object-bottom'
                        />
                    </div>
                    <div className='w-10 h-10'>
                        <img
                            src={icon}
                            alt='icon igreja do monte'
                            className='object-cover' //
                        />
                    </div>
                    <p className='font-semibold'>
                        Festa do
                        <br />
                        Monte 2025
                    </p>
                </NavLink>
            </div>

            <div className='flex flex-row flex-none items-center gap-2'>
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    // if (index === 0) return;
                    return (
                        <NavLink
                            key={item.href}
                            to={item.href}
                            className={`flex flex-row items-center gap-1 px-3 py-2 transition-colors ${
                                isActive
                                    ? 'text-primary'
                                    : 'text-base-content/70 hover:text-base-content'
                            }`}
                        >
                            <item.icon className='w-5 h-5' />
                            <span className='font-medium text-xs'>
                                {item.label}
                            </span>
                        </NavLink>
                    );
                })}

                <div className='pl-2 border-base-content/10 border-l'>
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
}

export function MobileNav() {
    const { pathname } = useLocation();

    return (
        <nav className='right-0 bottom-0 left-0 z-[9999999] fixed bg-base-200 px-4 py-2 border-neutral-content border-t'>
            {/* <nav className='bg-white px-4 py-2 border-gray-200 border-t'> */}
            <div className='flex justify-around mx-auto max-w-md'>
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <NavLink
                            key={item.href}
                            to={item.href}
                            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                                isActive
                                    ? 'text-primary bg-primary-content'
                                    : 'text-base-content/70 hover:text-base-content'
                            }`}
                        >
                            <item.icon className='mb-1 w-5 h-5' />
                            <span className='font-medium text-xs'>
                                {item.label}
                            </span>
                        </NavLink>
                    );
                })}
            </div>
        </nav>
    );
}
