import { NavLink, useLocation } from 'react-router';
import { Home, MapPin, Phone, Info } from 'lucide-react';
import { ModeToggle } from '@/components/theme-toggle';
import logo from '@/assets/brasao.png';
import icon from '@/assets/icon.png';
// import logob from '@/assets/text-black.png';
// import logow from '@/assets/text-white.png';

const navItems = [
    { href: '/app', icon: Home, label: 'Home' },
    { href: '/app/map', icon: MapPin, label: 'Mapas' },
    { href: '/app/contact', icon: Phone, label: 'Contactos' },
    { href: '/app/info', icon: Info, label: 'Informação' },
];

export function DesktopNav() {
    const { pathname } = useLocation();

    return (
        <div className='bg-base-200 shadow-sm m-2 mx-auto rounded-lg max-w-full lg:max-w-[80%] navbar'>
            <div className='flex flex-row flex-1 items-center gap-2'>
                <div className='avatar'>
                    <div className='mr-2 w-12 h-12'>
                        <img
                            src={logo}
                            alt='icon igreja do monte'
                            className='object-cover' //
                        />
                    </div>
                    <div className='w-12 h-12'>
                        <img
                            src={icon}
                            alt='icon igreja do monte'
                            className='object-cover' //
                        />
                    </div>
                    {/* NOTE: utilização do logo completo da paróquia fica uma caquinha */}
                    {/* <div className='w-40 h-12'>
                        <img
                            src={logob}
                            alt='icon igreja do monte'
                            className='object-cover' //
                        />
                    </div> */}
                </div>
                <p className='font-bold'>Festas do Monte 2025</p>
            </div>

            <div className='flex flex-row flex-none items-center gap-4'>
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <NavLink
                            key={item.href}
                            to={item.href}
                            className={`flex flex-row items-center gap-2 px-3 py-2 transition-colors ${
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
        <nav className='right-0 bottom-0 left-0 z-50 fixed bg-base-200 px-4 py-2 border-neutral-content border-t'>
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
