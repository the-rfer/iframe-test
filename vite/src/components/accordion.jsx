import { cn } from '@/lib/utils';

export function Accordion({ data, className }) {
    if (!data) return;

    return (
        <div className={cn('p-2 w-lg max-w-2xl', className)}>
            {data.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={`collapse collapse-plus bg-base-100 border border-base-300 ${
                            index === data.length - 1 ? '' : 'mb-2'
                        }`}
                    >
                        <input
                            type='radio'
                            name='my-accordion-3'
                            defaultChecked={index === 0 ? true : false}
                        />
                        <div className='collapse-title font-semibold'>
                            {item.title}
                        </div>
                        <div className='collapse-content text-sm'>
                            {item.content}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
