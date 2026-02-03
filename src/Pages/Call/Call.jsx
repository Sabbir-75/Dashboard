import React from 'react';
import Filter from '../../Components/Filter/Filter';
import { Outlet, useNavigate } from 'react-router';
import CallContainer from '../../Components/Container/CallContainer/CallContainer';
import { IoCallOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";

export const callListData = [
    {
        id: 1,
        phone: "+1 (555) 345-6789",
        date: "2025-12-16",
        time: "09:42 AM",
        duration: "5:23",
        statusText: "Escalated to technician",
        tag: "Software",
        tagType: "software",
        result: "Warm Transfer",
        resultType: "warning"
    },
    {
        id: 2,
        phone: "+1 (555) 345-6789",
        date: "2025-12-16",
        time: "09:42 AM",
        duration: "5:23",
        statusText: "Appointment Booked",
        tag: "Battery",
        tagType: "battery",
        result: "Appointment",
        resultType: "info"
    },
    {
        id: 3,
        phone: "+1 (555) 345-6789",
        date: "2025-12-16",
        time: "09:42 AM",
        duration: "0:20",
        statusText: "Call Dropped",
        tag: "Unknown",
        tagType: "unknown",
        result: "Dropped",
        resultType: "danger"
    },
    {
        id: 4,
        phone: "+1 (555) 345-6789",
        date: "2025-12-16",
        time: "09:42 AM",
        duration: "5:23",
        statusText: "Quote Provided",
        tag: "Screen",
        tagType: "screen",
        result: "AI Resolved",
        resultType: "success"
    }
];


const Call = () => {
    const navigate = useNavigate()

    const colorset = (item) => {
        if (item == "success") {
            return "text-[#05DF72] bg-gradient-to-r from-[#00c95034] to-[#00bc7d34] border-success"
        }
        else if (item == "danger") {
            return "text-[#FF0404] bg-gradient-to-r from-[#ff150033] to-[#fb2c3633] border-error"
        }
        else if (item == "info") {
            return "text-[#51A2FF] bg-gradient-to-r from-[#2b80ff33] to-[#00b7db33] border-info"
        }
        else {
            return "text-[#FF8904] bg-gradient-to-r from-[#ff6a0033] to-[#fb2c3633] border-warm"
        }
    }
    return (
        <div className='space-y-3 md:space-y-5 lg:space-y-7'>
            <Filter></Filter>
            <div className='grid grid-cols-12 gap-4 md:gap-5 lg:gap-7'>
                <div className='col-span-12 md:col-span-6'>
                    <CallContainer>
                        <h1 className='px-2 md:px-3 lg:px-4 text-lg font-normal text-white py-2 md:py-3 lg:py-4'>Call List</h1>
                        {
                            callListData.map(item => (
                                <div onClick={() => navigate(`/phone/${item.id}`)} key={item.id}  className='cursor-pointer px-2 md:px-3 lg:px-4 border-t-[2px] border-[#2b80ff35] pt-2 md:pt-3 lg:pt-4 pb-1 md:pb-2 lg:pb-3'>
                                    <div className='flex justify-between items-start'>
                                        <div className='flex items-center gap-2 md:gap-3'>
                                            <div className='w-[48px] h-[48px] rounded-[14px] p-2 md:p-3 flex justify-center items-center bg-gradient-to-br from-[#2B7FFF] to-[#00B8DB]'>

                                                <IoCallOutline className='text-[18px] md:text-[20px] lg:text-[24px] text-white' />
                                            </div>
                                            <div className='space-y-1'>
                                                <h1 className='text-base font-normal text-white'>{item.phone}</h1>
                                                <div className='flex gap-1'>
                                                    <h1 className='text-xs font-normal text-[#90A1B9]'>{item.date}</h1>
                                                    <h1 className='text-xs font-normal text-[#90A1B9]'>• {item.time}</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`w-[102px] text-center px-2 py-1 border-[2px]
                                           ${colorset(item.resultType)}
                                         text-xs font-normal rounded-[10px]`}>{item.result}</div>
                                    </div>
                                    <div className='flex gap-2 md:gap-3 lg:gap-4 mt-2 md:mt-3'>
                                        <div className='flex items-center gap-1 '>
                                            <IoTimeOutline className='text-[18px] text-[#90A1B9]' />
                                            <h1 className='text-sm text-[#90A1B9] font-normal'>
                                                {item.duration}
                                            </h1>
                                        </div>
                                        <div className='flex items-center gap-1 '>
                                            <FiCheckCircle className='text-[16px] text-[#90A1B9]' />
                                            <h1 className='text-sm text-[#90A1B9] font-normal'>
                                                {item.statusText}
                                            </h1>
                                        </div>
                                        <div className='px-2 py-1 bg-[#2b80ff35] text-[#51A2FF] rounded-[4px] text-xs font-normal'>Screen</div>
                                    </div>
                                </div>
                            ))
                        }


                    </CallContainer>
                </div>
                <div className='col-span-12 md:col-span-6'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Call;