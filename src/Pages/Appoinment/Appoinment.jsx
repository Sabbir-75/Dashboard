import React from 'react';
import CardContainer from '../../Components/Container/CardContainer/CardContainer';
import noice from "../../assets/image-removebg-preview.png"
import { FiCopy } from "react-icons/fi";
import { LuCalendar } from "react-icons/lu";
import { FiCheckCircle } from "react-icons/fi";
import { RiErrorWarningLine } from "react-icons/ri";
import Table from '../../Components/Table/Table';

const statsData = [
    {
        id: 1,
        title: "Total Booked",
        value: 34,
        subtitle: "+8 this week",
        status: "positive",
        icon: <LuCalendar className='text-[24px] text-[#51A2FF]' />
    },
    {
        id: 2,
        title: "AI Booked",
        value: 28,
        subtitle: "82% of total",
        status: "info",
        icon: <FiCheckCircle className='text-[24px] text-[#05DF72]' />
    },
    {
        id: 3,
        title: "Pending",
        value: 3,
        subtitle: "Awaiting confirmation",
        status: "warning",
        icon: <RiErrorWarningLine className='text-[24px] text-[#FDC700]' />
    },
];


const Appoinment = () => {
    return (
        <div className='space-y-7'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10'>


                {
                    statsData.map(item => (
                        <CardContainer>
                            <div className='space-y-2'>
                                <div className='flex items-center gap-3'>
                                    {item.icon}
                                    <h1 className='text-sm font-normal text-[#90A1B9]'>{item.title}</h1>
                                </div>
                                <h1 className='text-2xl font-normal text-white'>{item.value}</h1>
                                <h1 className={`text-sm font-normal ${item.id == 1 ? "text-[#05DF72]" : "text-[#90A1B9]"}`}>{item.subtitle}</h1>
                            </div>

                        </CardContainer>
                    ))
                }
            </div>
            <div className='md:space-y-4 space-y-3 p-4 md:p-5 lg:p-[25px] bg-gradient-to-b from-[#1b1b34] to-[#101d41] rounded-[10px] md:rounded-[16px] border-[2px] border-[#2b80ff37]'>
                <h1 className='text-base font-normal text-white mb-4'>Booking Link</h1>
                <div className='flex items-center gap-3'>
                    <div className='w-full'>
                        <input type="text" className="input text-white bd-[#3b83f680] border-[2px] border-[#00ff8837] focus:outline-none w-full h-[48px]" placeholder="https://techstore.com/book?id=store123" />
                    </div>

                    <div

                        style={{
                            backgroundImage: `url(${noice})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className={`active:bg-transparent cursor-pointer px-3 py-2 rounded-[12px] is-drawer-close:tooltip hover:bg-gradient-to-b from-[#152252] to-[#111B3C] is-drawer-close:tooltip-right duration-200
                                            shadow-[inset_0_1px_18px_2px_#D2EAFF,_0_42px_107px_0_#57b1ff53,_0_24.72px_32.26px_0_#57b1ff2f,_0_10.27px_13.4px_0_#57b1ff38,_0_3.71px_4.85px_0_#57b1ff2c]
                                            flex items-center gap-2 md:gap-3 w-[170px] mx-auto lg:gap-4`}>


                        <FiCopy className='text-white text-[26px]' />

                        <h1 className="is-drawer-close:hidden text-base font-medium text-white">Copy Link</h1>


                    </div>
                </div>
            </div>
            <Table></Table>
        </div>
    );
};

export default Appoinment;