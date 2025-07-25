import { NavLink } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { ModeToggle } from '@/components/theme-toggle';

export function MobileHeader({ title }) {
    return (
        <div className='md:hidden top-0 z-10 sticky bg-base-100 shadow-sm'>
            <div className='mx-auto px-4 py-4 container'>
                <div className='flex items-center'>
                    <NavLink to='/app' className='mr-4'>
                        <ArrowLeft className='w-6 h-6 text-base-content' />
                    </NavLink>
                    <h1 className='font-semibold text-xl'>{title}</h1>
                    <div className='flex justify-end grow'>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </div>
    );
}
