import React from 'react';
import { Outlet, useLocation } from 'react-router';



const Setting = () => {
    const location = useLocation()

    return (
        <div>
            <div className='flex gap-8 md:gap-10 lg:gap-14 items-center mb-4 md:mb-8 lg:mb-11'>
                <h1 className={`text-xl pb-2 border-b-2 ${location.pathname == "/setting/edit" ? "border-[#87A2FF]" : "border-transparent"} md:text-[24px] font-normal text-white`}>Profile</h1>
                <h1 className='text-xl pb-2 md:text-[24px] font-normal text-white'>Password Settings</h1>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Setting;