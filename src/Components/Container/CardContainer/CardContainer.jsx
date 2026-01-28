import React from 'react';

const CardContainer = ({ children }) => {
    return (
        <div className='md:space-y-4 space-y-3 p-4 md:p-5 lg:p-[25px] bg-base-200 rounded-[10px] md:rounded-[16px] border-[2px] border-[#2b80ff37]'>
            {children}
        </div>
    );
};

export default CardContainer;