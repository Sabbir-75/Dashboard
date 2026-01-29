import React from 'react';
import noice from "../../assets/image-removebg-preview.png"
import { NavLink } from 'react-router';
const profile = {
    id: 1,
    name: "Jane D.",
    avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    email: "jane@gmail.com",
    store_name: "Ubreakfix Store",
    address: {
        street: "123 Main Street, ",
        city: "New York, ",
        state: "NY ",
        zipCode: "10001",
    }
}

const Profile = () => {
    return (
        <div>
            <h1 className='text-md md:text-[20px] font-normal text-white'>Profile Image</h1>
            <div className='mt-2 flex gap-2 items-end'>
                <div className='w-[60px] md:w-[80px] lg:w-[102px] h-[60px] md:h-[80px] lg:h-[102px] rounded-full'>
                    <img className='rounded-full' src={profile.avatar} alt="avatar" />
                </div>
                <NavLink
                     to={`/setting/edit`}
                    style={{
                        backgroundImage: `url(${noice})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className={`active:bg-transparent rounded-[12px] is-drawer-close:tooltip px-2 py-1 hover:bg-gradient-to-b from-[#152252] to-[#111B3C] is-drawer-close:tooltip-right duration-200
                                            shadow-[inset_0_1px_18px_2px_#D2EAFF,_0_42px_107px_0_#57b1ff53,_0_24.72px_32.26px_0_#57b1ff2f,_0_10.27px_13.4px_0_#57b1ff38,_0_3.71px_4.85px_0_#57b1ff2c]
                                            `}>

                    <div className='flex items-center gap-3 md:gap-5 lg:gap-7'>

                        <span className="is-drawer-close:hidden text-base font-medium text-white">Edit Profile</span>
                    </div>

                </NavLink>
            </div>
            <div className='space-y-2 md:space-y-4 max-w-[570px] mt-4 md:mt-6 lg:mt-10'>
                <div className='border-b-2 border-[#192D71] pb-2 md:pb-4 items-center flex gap-16 md:gap-24'>
                    <h1 className='text-md md:text-lg text-white font-medium'>Full Name:</h1>
                    <h1 className='text-md md:text-lg text-white font-normal'>{profile.name}</h1>
                </div>
                <div className='border-b-2 border-[#192D71] pb-2 md:pb-4 flex items-center gap-25 md:gap-34'>
                    <h1 className='text-md md:text-lg text-white font-medium'>Email:</h1>
                    <h1 className='text-md md:text-lg text-white font-normal'>{profile.email}</h1>
                </div>
                <div className='border-b-2 border-[#192D71] pb-2 md:pb-4 flex items-center gap-13 md:gap-20'>
                    <h1 className='text-md md:text-lg text-white font-medium'>Store Name:</h1>
                    <h1 className='text-md md:text-lg text-white font-normal'>{profile.store_name}</h1>
                </div>
                <div className='flex items-center gap-15 md:gap-16'>
                    <h1 className='text-md md:text-lg text-white font-medium '>Store Address:</h1>
                    <h1 className='text-md md:text-lg text-white font-normal'>{profile.address.street}{profile.address.city}{profile.address.state}{profile.address.zipCode}</h1>
                </div>
            </div>
        </div>
    );
};

export default Profile;