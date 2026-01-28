import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { LuCalendar } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import { MdAccessTime } from "react-icons/md";
import { GoDependabot } from "react-icons/go";
import Activity from '../../Components/Activity/Activity';
import Requests from '../../Components/Requests/Requests';


const overview = [
    {
        id: 1,
        name: "Total Calls Today",
        count: "127",
        parsent: 12,
        icon: <div className='w-[48px] h-[48px] rounded-[14px] p-2 md:p-3 flex justify-center items-center bg-gradient-to-br from-[#2B7FFF] to-[#00B8DB]'>

            <IoCallOutline className='text-[18px] md:text-[20px] lg:text-[24px] text-white' />
        </div>
    },
    {
        id: 2,
        name: "AI-Handled Calls",
        count: "98",
        parsent: 77,
        icon: <div className='w-[48px] h-[48px] rounded-[14px] p-2 md:p-3 flex justify-center items-center bg-gradient-to-br from-[#AD46FF] to-[#F6339A]'>
            <GoDependabot className='text-[18px] md:text-[20px] lg:text-[24px] text-white' />
        </div>


    },
    {
        id: 3,
        name: "Warm Transfer",
        count: "23",
        parsent: 18,
        icon: <div className='w-[48px] h-[48px] rounded-[14px] p-2 md:p-3 flex justify-center items-center bg-gradient-to-br from-[#FF6900] to-[#FB2C36]'>

            <FaArrowRightArrowLeft className='text-[18px] md:text-[20px] lg:text-[24px] text-white' />
        </div>


    },
    {
        id: 4,
        name: "Appointments Booked",
        count: "34",
        parsent: 8,
        icon: <div className='w-[48px] h-[48px] rounded-[14px] p-2 md:p-3 flex justify-center items-center bg-gradient-to-br from-[#00C950] to-[#00BC7D]'>

            <LuCalendar className='text-[18px] md:text-[20px] lg:text-[24px] text-white' />
        </div>


    },
    {
        id: 5,
        name: "Missed/Failed Calls",
        count: "6",
        parsent: 3,
        icon: <div className='w-[48px] h-[48px] rounded-[14px] p-2 md:p-3 flex justify-center items-center bg-gradient-to-br from-[#FB2C36] to-[#FF2056]'>

            <RxCrossCircled className='text-[18px] md:text-[20px] lg:text-[24px] text-white' />
        </div>


    },
    {
        id: 6,
        name: "Avg Call Duration",
        count: "3:42",
        parsent: 15,
        icon: <div className='w-[48px] h-[48px] rounded-[14px] p-2 md:p-3 flex justify-center items-center bg-gradient-to-br from-[#615FFF] to-[#2B7FFF]'>

            <MdAccessTime className='text-[18px] md:text-[20px] lg:text-[24px] text-white' />
        </div>


    },
]

const Overview = () => {
    return (<>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6'>

            {
                overview.map(item => (
                    <div key={item.id} className='flex justify-between border-[2px] border-[2b80ff37] bg-base-200 px-2 md:px-4 lg:px-6 py-[25px] rounded-lg md:rounded-xl lg:rounded-2xl'>
                        <div>
                            <h4 className='text-xs mb-[7px] md:text-sm font-normal text-[#90A1B9]'>{item.name}</h4>
                            <h4 className='text-lg mb-[12px] md:mb-[17px] md:text-[24px] lg:text-[30px] font-normal text-[#FFFFFF]'>{item.count}</h4>
                            <h4 className='text-xs md:text-sm font-normal text-[#05DF72]'>+{item.parsent}%</h4>
                        </div>
                        {item.icon}
                    </div>
                ))
            }


        </div>
        <div className='mt-4 md:mt-5 lg:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6'>
            <Activity></Activity>
            <Requests></Requests>
        </div>

    </>
    );
};

export default Overview;