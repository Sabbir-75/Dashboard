import React, { useState } from 'react';
import overview from "../../assets/home.png"
import phone from "../../assets/phone.png"
import calender from "../../assets/calender.png"
import setting from "../../assets/setting.png"
import noice from "../../assets/image-removebg-preview.png"
import logo from "../../assets/logo.png"
import { IoIosNotifications } from "react-icons/io";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { RiMenuUnfold4Fill } from "react-icons/ri";
import { NavLink, Outlet, useLocation } from 'react-router';

const menu = [
    {
        id: 1,
        manuName: "Dashboard Overview",
        image: overview,
        link: "overview"
    },
    {
        id: 2,
        manuName: "Call Logs",
        image: phone,
        link: "phone"
    },
    {
        id: 3,
        manuName: "Appointments",
        image: calender,
        link: "appoinments"
    },
    {
        id: 4,
        manuName: "Settings",
        image: setting,
        link: "setting",
    },
]

const Dashboard = () => {
    const [open, setOpen] = useState(false)
    const [hoverId, setHoverId] = useState(null);
    const location = useLocation()
    console.log(location.pathname)

    return (
        <div className='max-w-[1440px] bg-[linear-gradient(to_bottom_right,#020618,#162456,#0F172B)] mx-auto'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" defaultChecked />
                <div className="drawer-content">
                    {/* Navbar */}
                    <nav className="navbar w-full bg-base-100 px-1 md:px-4 lg:px-6 py-1 md:py-2 flex items-center justify-between">
                        <div className='flex items-center'>

                            <label htmlFor="my-drawer-4"
                                onClick={() => setOpen(!open)}
                                aria-label="open sidebar" className="btn btn-square btn-ghost">

                                {
                                    open ? <RiMenuUnfold4Fill className='text-[24px] md:text-[32px] lg:text-[40px] text-white' /> : <RiMenuUnfold3Fill className='text-[24px] md:text-[32px] lg:text-[40px] text-white' />
                                }


                            </label>
                            <div className="px-1 text-[18px] md:text-[26px] lg:text-[32px] font-normal text-white">Dashboard Overview</div>
                        </div>
                        <div className='flex items-center gap-4 md:gap-8 lg:gap-10'>
                            <IoIosNotifications className='text-[22px] md:text-[30px] lg:text-[40px] text-white' />
                            <div className="w-8 md:w-14 lg:w-20 rounded-full">
                                <img
                                    className='rounded-full'
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>

                    </nav>

                  


                    <div className="px-4 md:px-5 lg:px-6 pt-4 md:pt-5 lg:pt-6">
                        <Outlet></Outlet>
                    </div>




                </div>

                <div className="drawer-side bg-base-100 stroke-1 border-r-2 border-[#2b80ff33] pt-[26px] md:pt-[30px] lg:pt-[38px] is-drawer-close:overflow-visible duration-200">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

                    <div className="flex bg-base-100 min-h-full flex-col items-start is-drawer-close:w-14 is-drawer-open:w-61">
                        <div className='bg-gradient-to-b from-[#00FF88] to-[#00D4FF] rounded-[14px] mx-auto w-9 md:w-12 lg:w-14 h-9 md:h-12 lg:h-14 mb-[30px] md:mb-[50px] lg:mb-[72px] flex justify-center items-center'>
                            <img className='w-4 md:w-6 lg:w-8' src={logo} alt={logo} />
                        </div>

                        <ul className="menu w-full grow space-y-4 md:space-y-5 lg:space-y-7">
                            {
                                menu.map(item => (
                                    <li key={item.id}>
                                        <NavLink to={item.link === "overview" ? "/" : `/${item.link}`}
                                            onMouseEnter={() => setHoverId(item.id)}
                                            onMouseLeave={() => setHoverId(null)}
                                            style={{
                                                backgroundImage: (((hoverId === item.id) || (location.pathname == `/${item.link}`)) || (item.link === "overview" && location.pathname == "/")) ? `url(${noice})` : "none",
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                            className={`active:bg-transparent is-drawer-close:tooltip px-2 py-1 hover:bg-gradient-to-b from-[#152252] to-[#111B3C] is-drawer-close:tooltip-right hover:border-b-1 border-b-1 border-transparent hover:border-white duration-200
                                            hover:shadow-[inset_0_1px_18px_2px_#D2EAFF,_0_42px_107px_0_#57b1ff53,_0_24.72px_32.26px_0_#57b1ff2f,_0_10.27px_13.4px_0_#57b1ff38,_0_3.71px_4.85px_0_#57b1ff2c]
                                            ${((location.pathname == `/${item.link}`) || (item.link === "overview" && location.pathname == "/")) && "shadow-[inset_0_1px_18px_2px_#D2EAFF,_0_42px_107px_0_#57b1ff53,_0_24.72px_32.26px_0_#57b1ff2f,_0_10.27px_13.4px_0_#57b1ff38,_0_3.71px_4.85px_0_#57b1ff2c] bg-gradient-to-b from-[#152252] to-[#111B3C] border-b-1 border-white"}
                                            `}
                                            data-tip={`${item.manuName}`}>

                                            <div className='flex items-center gap-3 md:gap-5 lg:gap-7'>
                                                <img className='w-4 md:w-6 lg:w-8' src={item.image} alt={item.image} />
                                                <span className="is-drawer-close:hidden text-base font-medium text-white">{item.manuName}</span>
                                            </div>

                                        </NavLink>
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