import { NavLink } from 'react-router';

export default function Index() {
    return (
        <div
            className='relative flex justify-center items-center px-4 min-h-screen'
            style={{
                backgroundImage: "url('/monte-arraial.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                willChange: 'transform',
            }}
        >
            <div className='z-0 absolute inset-0 bg-black/60 backdrop-blur-sm' />

            <main
                className='z-20 relative space-y-8 bg-white/20 hover:bg-white/30 shadow-2xl hover:shadow-2xl backdrop-blur-lg backdrop-saturate-150 p-10 md:p-14 border border-white/30 rounded-3xl ring-1 ring-white/20 w-full max-w-3xl text-gray-100 text-center transition-all duration-500'
                aria-label='Informações sobre o festas do Monte'
            >
                <header className='space-y-2'>
                    <h1 className='drop-shadow-lg font-extrabold text-green-200 text-5xl md:text-6xl leading-tight'>
                        Festa do Monte
                    </h1>
                    <p className='text-gray-100/80 text-base md:text-lg tracking-wide'>
                        A Festa do Monte é uma das mais emblemáticas tradições
                        da Madeira, unindo fé e celebração. De 5 a 13 de agosto,
                        as novenas preparam espiritualmente os fiéis para os
                        dias principais — 14 e 15 de agosto — marcados por
                        procissões, devoção e muita animação. Os arruamentos
                        enchem-se de flores, sabores típicos, num dos eventos
                        mais emblemáticos do ano.
                    </p>
                </header>

                <NavLink
                    to='/app'
                    className='inline-flex justify-center items-center gap-3 bg-green-700 hover:bg-green-800 shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] px-8 py-3 rounded-full focus:outline-none focus:ring-4 focus:ring-green-400/50 font-semibold text-white text-lg hover:scale-105 transition-all duration-100'
                >
                    Aceder à aplicação &#8594;
                </NavLink>
            </main>
        </div>
    );
}
