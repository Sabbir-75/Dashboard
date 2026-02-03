import React from 'react';

const CallContainer = ({children}) => {
    return (
        <div className='bg-base-200 border-[2px] border-[#2b80ff35] rounded-[16px]'>
           {children}
        </div>
    );
};

export default CallContainer;