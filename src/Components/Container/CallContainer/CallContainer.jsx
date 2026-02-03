import React from 'react';

const CallContainer = ({children}) => {
    return (
        <div className='bg-base-200 rounded-[16px]'>
           {children}
        </div>
    );
};

export default CallContainer;