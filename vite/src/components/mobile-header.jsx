import { NavLink } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function MobileHeader({ title }) {
    return (
        <div className='md:hidden top-0 z-10 sticky bg-white shadow-sm'>
            <div className='mx-auto px-4 py-4 container'>
                <div className='flex items-center'>
                    <NavLink to='/app' className='mr-4'>
                        <ArrowLeft className='w-6 h-6 text-gray-600' />
                    </NavLink>
                    <h1 className='font-semibold text-gray-800 text-xl'>
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
}
