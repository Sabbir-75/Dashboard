import React from 'react';
import CardContainer from '../Container/CardContainer/CardContainer';
import { MdArrowDropDown } from 'react-icons/md';

const Rechart = () => {
    return (
        <CardContainer>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-[#FFFFFF] text-xl font-normal mb-1'>Call Trends - This Week</h1>
                    <h1 className='text-[#90A1B9] text-sm font-normal'>Total: 472 calls</h1>
                </div>
                <div>
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className="text-white border-[2px] border-[#2b80ff3a] bg-[#1D293D] btn m-1">This Week <MdArrowDropDown /></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li className='text-sm text-white'><a>This Month</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </CardContainer>
    );
};

export default Rechart;