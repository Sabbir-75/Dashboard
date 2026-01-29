import React from 'react';
import { FaRegEdit } from "react-icons/fa";

const Edit = () => {
    return (
        <div>
            <h1 className='text-md md:text-[20px] font-normal text-white'>Profile Image</h1>
            <div className='mt-2 mb-4 md:mb-6 lg:mb-10'>
                <div className='relative w-[60px] md:w-[80px] lg:w-[102px] h-[60px] md:h-[80px] lg:h-[102px] rounded-full'>
                    <img className='rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="avatar" />
                    <div className='text-2xl z-20 absolute -bottom-1 -right-2 bg-[#7AA3CC] rounded-lg w-10 h-10 flex justify-center items-center'>
                        <FaRegEdit className='text-white' size={22} />
                    </div>
                </div>
            </div>
            <form>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-10'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-medium text-white">Full Name</legend>
                        <input type="text" className="input text-white bd-[#3b83f680] border-[2px] border-[#00ff8837] focus:outline-none w-full h-[48px]" placeholder="Jane D." />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-medium text-white">Email</legend>
                        <input type="email" className="input text-white bd-[#3b83f680] border-[2px] border-[#00ff8837] focus:outline-none w-full h-[48px]" placeholder="jane@gmail.com" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-medium text-white">Store Name</legend>
                        <input type="text" className="input text-white bd-[#3b83f680] border-[2px] border-[#00ff8837] focus:outline-none w-full h-[48px]" placeholder="Ubreakfix Store" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg font-medium text-white">Store Address</legend>
                        <input type="text" className="input text-white bd-[#3b83f680] border-[2px] border-[#00ff8837] focus:outline-none w-full h-[48px]" placeholder="123 Main Street, New York" />
                    </fieldset>
                </div>
                <div className='max-w-[373px] py-2 cursor-pointer mx-auto my-10 md:my-16 lg:my-20 bg-[#00C950] text-2xl font-bold text-white flex justify-center items-center rounded-[16px]'>
                    Save
                </div>

            </form>

        </div>
    );
};

export default Edit;