export function Calendar({ schedule }) {
    return (
        <div className='divide-y divide-base-100'>
            {schedule.map((day, dayIndex) => (
                <div key={dayIndex} className='p-4'>
                    <h3 className='mb-3 font-semibold text-lg'>{day.day}</h3>
                    <div className='space-y-3'>
                        {day.events.map((event, eventIndex) => (
                            <div key={eventIndex} className='flex items-start'>
                                <div className='bg-blue-100 mt-0.5 mr-3 px-2 py-1 rounded min-w-fit font-medium text-blue-800 text-xs'>
                                    {event.time}
                                </div>

                                <div className='flex-1'>
                                    <div className='font-medium'>
                                        {event.event}
                                    </div>
                                    <div className='text-sm'>
                                        {event.location}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
