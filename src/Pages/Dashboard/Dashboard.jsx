import React from 'react';
import home from "../../assets/home.png"
import phone from "../../assets/phone.png"
import calender from "../../assets/calender.png"
import setting from "../../assets/setting.png"
import logo from "../../assets/logo.png"
import { IoIosNotifications } from "react-icons/io";

const menu = [
    {
        manuName: "Dashboard Overview",
        image: home
    },
    {
        manuName: "Call Logs",
        image: phone
    },
    {
        manuName: "Appointments",
        image: calender
    },
    {
        manuName: "Settings",
        image: setting
    },
]

const Dashboard = () => {

    return (
        <div className='max-w-[1440px] bg-[linear-gradient(to_bottom_right,#020618,#162456,#0F172B)] mx-auto'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Navbar */}
                    <nav className="navbar w-full bg-base-100 pl-6 py-1 pr-1 md:p-2 flex items-center justify-between">
                        <div className='flex items-center'>

                            <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                {/* Sidebar toggle icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                            </label>
                            <div className="px-4 text-[32px] font-normal text-white">Dashboard Overview</div>
                        </div>
                        <div className='flex items-center gap-10'>
                             <IoIosNotifications size={32} />
                            <div className="w-10 md:w-16 lg:w-20 rounded-full">
                                <img
                                className='rounded-full'
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>

                    </nav>
                    {/* Page content here */}
                    <div className="px-4 md:px-5 lg:px-6">Page Content</div>
                </div>

                <div className="drawer-side bg-base-100 stroke-1 border-r-2 border-[#2b80ff33] pt-[26px] ptmd:-[30px] lg:pt-[38px] is-drawer-close:overflow-visible duration-200">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className='bg-gradient-to-b from-[#00FF88] to-[#00D4FF] rounded-[14px] mx-auto w-9 md:w-12 lg:w-14 h-9 md:h-12 lg:h-14 mb-[30px] md:mb-[50px] lg:mb-[72px] flex justify-center items-center'>
                        <img className='w-4 md:w-6 lg:w-8' src={logo} alt={logo} />
                    </div>
                    <div className="flex min-h-full flex-col items-start is-drawer-close:w-14 is-drawer-open:w-61">

                        <ul className="menu w-full grow space-y-4 md:space-y-5 lg:space-y-7">
                            {
                                menu.map(item => (
                                    <li>
                                        <button className="is-drawer-close:tooltip px-2 py-1 is-drawer-close:tooltip-right" data-tip="Homepage">

                                            <div className='flex items-center gap-3 md:gap-5 lg:gap-7'>
                                                <img className='w-4 md:w-6 lg:w-8' src={item.image} alt={item.image} />
                                                <span className="is-drawer-close:hidden text-base font-medium text-white">{item.manuName}</span>
                                            </div>

                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;