import React, { useEffect, useState } from 'react';
import CardContainer from '../Container/CardContainer/CardContainer';

const repairData = [
    {
        id: 1,
        title: "Screen Repair",
        value: 156
    },
    {
        id: 2,
        title: "Battery Replacement",
        value: 89
    },
    {
        id: 3,
        title: "Back Glass Repair",
        value: 67
    },
    {
        id: 4,
        title: "Software Issues",
        value: 45
    },
];

const Requests = () => {
    const maxValue = 230;
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
         setAnimate(true)
    }, []);

    return (
        <CardContainer>
            <h1 className='text-[#FFFFFF] text-xl font-normal'>Top Repair Requests</h1>
            <div className="space-y-5">
                {repairData.map((item, index) => {
                    const percentage = (item.value / maxValue) * 100;
                    return (
                        <div key={index}>
                            <div className="flex justify-between text-white mb-2">
                                <span>{item.title}</span>
                                <span className="text-[#C0CCDD]">
                                    {item.value} requests
                                </span>
                            </div>

                            <div className="w-full h-2 bg-[#1D293D] rounded-full">
                                <div
                                    className="h-2 rounded-full bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB] transition-all duration-700"
                                    style={{
                                        width: animate ? `${percentage}%` : '0%',
                                    }}
                                ></div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </CardContainer>
    );
};

export default Requests;