import Map from '@/components/map';
import { NavLink } from 'react-router';

export function Index() {
    return (
        <div className='flex-col flex-1 bg-green-100 w-full h-screen text-3xl'>
            landing
            {/* <Map /> */}
            <NavLink to='/app' className='btn'>
                app
            </NavLink>
        </div>
    );
}
