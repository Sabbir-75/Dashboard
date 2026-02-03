import React from 'react';
import { Play, FileText } from 'lucide-react';
import CallContainer from '../../Components/Container/CallContainer/CallContainer';


export const callListData = [
    {
        id: 1,
        phone: "+1 (555) 345-6789",
        date: "2025-12-16",
        time: "09:42 AM",
        duration: "5:23",
        statusText: "Escalated to technician",
        tag: "Software",
        tagType: "software",
        result: "Warm Transfer",
        resultType: "warning",
        transcripts: [
            { sender: "AI Assistant", message: "Welcome to UberFix. How may I assist you today?" },
            { sender: "Customer", message: "My phone keeps freezing and restarting randomly." },
            { sender: "AI Assistant", message: "I understand. This seems like a software-related issue." },
            { sender: "Customer", message: "Can this be fixed remotely?" },
            { sender: "AI Assistant", message: "This issue requires deeper inspection by a technician." },
            { sender: "AI Assistant", message: "I am transferring your call to a technician now." }
        ]
    },

    {
        id: 2,
        phone: "+1 (555) 345-6789",
        date: "2025-12-16",
        time: "09:42 AM",
        duration: "5:23",
        statusText: "Appointment Booked",
        tag: "Battery",
        tagType: "battery",
        result: "Appointment",
        resultType: "info",
        transcripts: [
            { sender: "AI Assistant", message: "Welcome to UberFix. What issue are you facing today?" },
            { sender: "Customer", message: "My phone battery drains very fast." },
            { sender: "AI Assistant", message: "That sounds like a battery health issue." },
            { sender: "Customer", message: "Do I need to replace the battery?" },
            { sender: "AI Assistant", message: "Yes, a battery replacement is recommended." },
            { sender: "AI Assistant", message: "Your appointment has been successfully booked." }
        ]
    },

    {
        id: 3,
        phone: "+1 (555) 345-6789",
        date: "2025-12-16",
        time: "09:42 AM",
        duration: "0:20",
        statusText: "Call Dropped",
        tag: "Unknown",
        tagType: "unknown",
        result: "Dropped",
        resultType: "danger",
        transcripts: [
            { sender: "AI Assistant", message: "Hello! Welcome to UberFix support." },
            { sender: "Customer", message: "Hi, I am facing an issue with my phone." },
            { sender: "AI Assistant", message: "Sure, could you please describe the issue?" },
            { sender: "Customer", message: "Actually, my phone suddenly..." },
            { sender: "AI Assistant", message: "Hello? Are you still there?" },
            { sender: "AI Assistant", message: "It seems the call was disconnected." }
        ]
    },

    {
        id: 4,
        phone: "+1 (555) 345-6789",
        date: "2025-12-16",
        time: "09:42 AM",
        duration: "5:23",
        statusText: "Quote Provided",
        tag: "Screen",
        tagType: "screen",
        result: "AI Resolved",
        resultType: "success",
        transcripts: [
            { sender: "AI Assistant", message: "Welcome to UberFix. What issue are you facing today?" },
            { sender: "Customer", message: "My phone battery drains very fast." },
            { sender: "AI Assistant", message: "That sounds like a battery issue. A replacement is recommended." },
            { sender: "Customer", message: "Okay, can I book an appointment?" },
            { sender: "AI Assistant", message: "Your appointment has been booked for tomorrow at 11:30 AM." },
            { sender: "Customer", message: "Okay, I am waiting." }
        ]
    }
];



const Details = () => {

    return (
        <CallContainer>
            <h1 className='px-2 md:px-3 lg:px-4 text-lg font-normal text-white py-2 md:py-3 lg:py-4'>Call Details</h1>

            {/* Metadata Grid */}
            <div className='border-t-[2px] border-[#2b80ff35] pl-4 pr-8 pt-4 pb-3 md:pl-6 md:pr-10 md:pt-6 md:pb-5'>


                <div className="grid grid-cols-2 gap-y-6 mb-6">
                    <div>
                        <p className="text-sm text-[#90A1B9] font-normal">Phone Number</p>
                        <p className="text-base font-normal text-white">+1 (555) 123-4567</p>
                    </div>
                    <div>
                        <p className="text-sm text-[#90A1B9] font-normal">Duration</p>
                        <p className="text-base font-normal text-white">4:32</p>
                    </div>
                    <div>
                        <p className="text-sm text-[#90A1B9] font-normal">Date & Time</p>
                        <p className="text-base font-normal text-white">2025-12-16 10:45 AM</p>
                    </div>
                    <div>
                        <p className="text-sm text-[#90A1B9] font-normal">Issue Type</p>
                        <p className="text-base font-normal text-white">Screen</p>
                    </div>
                </div>

                {/* Status Badges */}
                <div className="mb-6 space-y-4">
                    <div>
                        <p className="text-sm text-[#90A1B9] font-normal mb-1">Call Type</p>
                        <div className={`w-[102px] text-center px-3 py-1 border-[2px]
                        text-[#05DF72] bg-gradient-to-r from-[#00c95034] to-[#00bc7d34] border-success
                                           
                                         text-xs font-normal rounded-[10px]`}>AI Resolved</div>
                    </div>
                    <div>
                        <p className="text-sm text-[#90A1B9] font-normal mb-1">Outcome</p>
                        <p className="text-base text-white font-normal">Quote provided</p>
                    </div>
                </div>

                {/* Audio Button */}
                <button className="w-full bg-gradient-to-r from-[#ac46ff33] to-[#f6339b33] hover:bg-[rgba(172,70,255,0.1)] cursor-pointer duration-200 py-3 rounded-[14px] flex items-center justify-center gap-2 mb-6 border-[2px] border-[#ac46ff4d]">
                    <Play size={18} className='text-[#C27AFF]' />
                    <span className="text-base font-normal text-[#C27AFF]">Play Audio Recording</span>
                </button>

                {/* Transcript Section */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#51A2FF] mb-4">
                        <FileText size={18} />
                        <h3 className="text-base font-normal text-white">Conversation Transcript</h3>
                    </div>

                    {/* <div className="bg-[#1d293d80] rounded-[14px] p-4 space-y-3">
                        {transcript.map((line, index) => (
                            <div key={index} className="space-y-1">
                                <p className={`text-base font-normal ${line.role === 'AI Assistant' ? 'text-[#05DF72]' : 'text-[#51A2FF]'}`}>
                                    {line.sender}:
                                </p>
                                <p className="text-sm font-medium leading-relaxed text-white">
                                    {line.message}
                                </p>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </CallContainer>
    );
};

export default Details;