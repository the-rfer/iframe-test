import { NavLink, useLocation } from 'react-router';
import { Home, MapPin, Phone, Info } from 'lucide-react';
import logo from '@/assets/brasao.png';

const navItems = [
    { href: '/app', icon: Home, label: 'Home' },
    { href: '/app/map', icon: MapPin, label: 'Mapas' },
    { href: '/app/contact', icon: Phone, label: 'Contactos' },
    { href: '/app/info', icon: Info, label: 'Informação' },
];

export function DesktopNav() {
    const { pathname } = useLocation();

    return (
        <div className='bg-white shadow-sm m-2 mx-auto rounded-lg max-w-full lg:max-w-[80%] navbar'>
            <div className='flex flex-row flex-1 items-center gap-2'>
                <div className='avatar'>
                    <div className='rounded w-12'>
                        <img src={logo} alt='Cidade do Funchal' />
                    </div>
                </div>
                <p className='font-bold'>Arraial do Monte 2025</p>
            </div>

            <div className='flex flex-row flex-none items-center gap-4'>
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <NavLink
                            key={item.href}
                            to={item.href}
                            className={`flex flex-row items-center gap-2  px-3 py-2 transition-colors ${
                                isActive
                                    ? 'text-blue-600 '
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                        >
                            <item.icon className='w-5 h-5' />
                            <span className='font-medium text-xs'>
                                {item.label}
                            </span>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}

export function MobileNav() {
    const { pathname } = useLocation();

    return (
        <nav className='right-0 bottom-0 left-0 z-50 fixed bg-white px-4 py-2 border-gray-200 border-t'>
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
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-600 hover:text-gray-800'
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
