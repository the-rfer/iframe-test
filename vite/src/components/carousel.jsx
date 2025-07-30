import { useSwipeable } from 'react-swipeable';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    'https://visit.funchal.pt/wp-content/uploads/2016/06/455792222_1068759631276032_2040486040981874842_n-2-1620x1080.jpg',
    'https://visit.funchal.pt/wp-content/uploads/2016/06/455225205_1068759417942720_2430683438460840673_n-2-1620x1080.jpg',
    'https://visit.funchal.pt/wp-content/uploads/2016/06/455729245_1068759911276004_750796842904995587_n-1-1620x1080.jpg',
    'https://visit.funchal.pt/wp-content/uploads/2016/06/455646769_1068759421276053_8072773291796864884_n-2-1620x1080.jpg',
    'https://visit.funchal.pt/wp-content/uploads/2016/06/455857476_1068759544609374_2738728354828048732_n-2-1620x1080.jpg',
    'https://visit.funchal.pt/wp-content/uploads/2016/06/455720629_1068759551276040_6043810076890434677_n-2-1620x1080.jpg',
    'https://visit.funchal.pt/wp-content/uploads/2016/06/455178754_1068759424609386_487234997344058715_n-1620x1080.jpg',
    'https://visit.funchal.pt/wp-content/uploads/2016/06/455306578_1068759874609341_2483846440188414769_n-2-1620x1080.jpg',
    'https://visit.funchal.pt/wp-content/uploads/2016/06/455527522_1068759427942719_4269325916430352686_n-2-1620x1080.jpg',
    'https://visit.funchal.pt/wp-content/uploads/2016/06/455180419_1068760554609273_6430131882517730993_n-2-1620x1080.jpg',
    'https://visit.funchal.pt/wp-content/uploads/2016/06/455239081_1068759624609366_3194000706102155336_n-2-1620x1080.jpg',
    'https://visit.funchal.pt/wp-content/uploads/2016/06/455696910_1068760497942612_2875618569091190293_n-1-1620x1080.jpg',
];

export function Carousel() {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);

    const scrollToIndex = (index) => {
        const el = carouselRef.current;
        if (!el) return;
        const itemWidth = el.firstChild?.clientWidth || 1;
        const gap = 16; // matches space-x-4
        const scrollTo = index * (itemWidth + gap);
        el.scrollTo({ left: scrollTo, behavior: 'smooth' });
    };

    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;

        const handleScroll = () => {
            const scrollLeft = el.scrollLeft;
            const itemWidth = el.firstChild?.clientWidth || 1;
            const index = Math.round(scrollLeft / (itemWidth + 16));
            setCurrentIndex(index);
        };

        el.addEventListener('scroll', handleScroll);
        return () => el.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % images.length;
            scrollToIndex(nextIndex);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => scrollToIndex((currentIndex + 1) % images.length),
        onSwipedRight: () =>
            scrollToIndex((currentIndex - 1 + images.length) % images.length),
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    const handlePrev = () =>
        scrollToIndex((currentIndex - 1 + images.length) % images.length);
    const handleNext = () => scrollToIndex((currentIndex + 1) % images.length);

    return (
        <div className='mx-auto md:max-w-[1500px] max-w-md grow'>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-4'>
                <div className='hidden md:flex justify-center items-center'>
                    <button
                        onClick={handlePrev}
                        className='hidden md:flex justify-center items-center bg-base-200 hover:bg-base-300 shadow p-2 rounded-full'
                    >
                        <ChevronLeft className='w-5 h-5' />
                    </button>
                </div>
                <div
                    {...swipeHandlers}
                    ref={carouselRef}
                    className='space-x-4 bg-base p-4 border border-base-300 rounded-box max-w-xl md:min-h-[600px] overflow-x-auto scroll-smooth grow carousel carousel-center'
                >
                    {images.map((src, i) => (
                        <div className='carousel-item' key={i}>
                            <img
                                src={src}
                                className='rounded-box w-64 md:w-96 h-full object-cover'
                                onClick={() => setSelectedImage(src)}
                            />
                        </div>
                    ))}
                </div>
                <div className='hidden md:flex justify-center items-center'>
                    <button
                        onClick={handleNext}
                        className='hidden md:flex justify-center items-center bg-base-200 hover:bg-base-300 shadow p-2 rounded-full'
                    >
                        <ChevronRight className='w-5 h-5' />
                    </button>
                </div>
            </div>

            {/* legenda */}
            <div className='mt-2 font-medium text-neutral-content text-sm text-center'>
                {currentIndex + 1} / {images.length}
            </div>

            {/* thumbnails */}
            <div className='flex flex-wrap justify-center items-center gap-2 mt-4'>
                {images.map((src, i) => (
                    <button
                        key={i}
                        onClick={() => scrollToIndex(i)}
                        className={`border-2 rounded overflow-hidden ${
                            currentIndex === i
                                ? 'border-primary'
                                : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                    >
                        <img
                            src={src}
                            alt={`Thumbnail ${i + 1}`}
                            className='w-16 h-12 object-cover'
                        />
                    </button>
                ))}
            </div>
            <p className='my-2 text-sm text-center'>
                fonte:{' '}
                <a
                    href='https://visit.funchal.pt/item/festa-da-nossa-senhora-do-monte/'
                    target='_blank'
                    className='link'
                >
                    visit.funchal.pt
                </a>
            </p>

            {/* modal */}
            {selectedImage && (
                <div
                    className='z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-80'
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        className='shadow-lg rounded max-w-full max-h-full'
                        onClick={(e) => e.stopPropagation()} // prevent closing on image click
                    />
                    <button
                        className='top-4 right-4 absolute bg-black bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full w-10 h-10 text-white'
                        onClick={() => setSelectedImage(null)}
                    >
                        ✕
                    </button>
                </div>
            )}
        </div>
    );
}

// return (
//         <div className='mx-auto w-full max-w-md max-h-96 md:max-h-[1500px] grow'>
//             {/* botões desktop only */}
//             <button
//                 onClick={handlePrev}
//                 className='hidden top-[40%] left-[25%] z-10 absolute md:flex justify-center items-center bg-base-200 hover:bg-base-300 shadow p-2 rounded-full -translate-y-1/2'
//             >
//                 <ChevronLeft className='w-5 h-5' />
//             </button>
//             <button
//                 onClick={handleNext}
//                 className='hidden top-[40%] right-[25%] z-10 absolute md:flex justify-center items-center bg-base-200 hover:bg-base-300 shadow p-2 rounded-full -translate-y-1/2'
//             >
//                 <ChevronRight className='w-5 h-5' />
//             </button>

//             {/* main imgs */}
//             <div
//                 {...swipeHandlers}
//                 ref={carouselRef}
//                 className='space-x-4 bg-base p-4 border border-base-300 rounded-box max-w-md h-full overflow-x-auto scroll-smooth grow carousel carousel-center'
//             >
//                 {images.map((src, i) => (
//                     <div className='carousel-item' key={i}>
//                         <img
//                             src={src}
//                             className='rounded-box w-64 md:w-96 h-full object-cover'
//                             onClick={() => setSelectedImage(src)}
//                         />
//                     </div>
//                 ))}
//             </div>

//             {/* legenda */}
//             <div className='mt-2 font-medium text-neutral-content text-sm text-center'>
//                 {currentIndex + 1} / {images.length}
//             </div>

//             {/* thumbnails */}
//             <div className='flex flex-wrap justify-center items-center gap-2 mt-4'>
//                 {images.map((src, i) => (
//                     <button
//                         key={i}
//                         onClick={() => scrollToIndex(i)}
//                         className={`border-2 rounded overflow-hidden ${
//                             currentIndex === i
//                                 ? 'border-primary'
//                                 : 'border-transparent opacity-60 hover:opacity-100'
//                         }`}
//                     >
//                         <img
//                             src={src}
//                             alt={`Thumbnail ${i + 1}`}
//                             className='w-16 h-12 object-cover'
//                         />
//                     </button>
//                 ))}
//             </div>

//             {/* modal */}
//             {selectedImage && (
//                 <div
//                     className='z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-80'
//                     onClick={() => setSelectedImage(null)}
//                 >
//                     <img
//                         src={selectedImage}
//                         className='shadow-lg rounded max-w-full max-h-full'
//                         onClick={(e) => e.stopPropagation()} // prevent closing on image click
//                     />
//                     <button
//                         className='top-4 right-4 absolute bg-black bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full w-10 h-10 text-white'
//                         onClick={() => setSelectedImage(null)}
//                     >
//                         ✕
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
