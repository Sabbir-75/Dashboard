import React from 'react';
import CardContainer from '../Container/CardContainer/CardContainer';

const activitys = [
    {
        id: 1,
        name: "AI booked appointment for iPhone 13 screen repair",
        time: "2 min ago",
        circle: <div className='mt-2 w-2 h-2 rounded-full bg-[#05DF72]'></div>
    },
    {
        id: 2,
        name: "Warm transfer to technician - Software issue",
        time: "5 min ago",
        circle: <div className='mt-2 w-2 h-2 rounded-full bg-[#FF8904]'></div>
    },
    {
        id: 3,
        name: "Quote provided for iPad battery replacement",
        time: "8 min ago",
        circle: <div className='mt-2 w-2 h-2 rounded-full bg-[#05DF72]'></div>
    },
    {
        id: 4,
        name: "Call dropped after 12 seconds",
        time: "15 min ago",
        circle: <div className='mt-2 w-2 h-2 rounded-full bg-[#FF6467]'></div>
    },
]

const Activity = () => {
    return (
        <CardContainer>
            <h1 className='text-[#FFFFFF] text-xl font-normal'>Recent Activity</h1>
            {
                activitys.map(item => (
                    <div className='p-2.5 md:p-4 bg-[#10131880] rounded-[10px]'>
                        <div className='flex items-start gap-3 md:gap-4'>
                            {item.circle}
                            <div className='space-y-1'>
                                <h1 className='text-[#FFFFFF] text-sm font-normal'>{item.name}</h1>
                                <h1 className='text-[#7A8BA4] text-xs font-normal'>{item.time}</h1>
                            </div>
                        </div>

                    </div>
                ))
            }
        </CardContainer>
    );
};

export default Activity;