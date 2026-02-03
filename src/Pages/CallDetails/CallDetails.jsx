import React from 'react';
import { Play, FileText } from 'lucide-react';
import { useParams } from 'react-router';
import { callListData } from '../Details/Details';
import CallContainer from '../../Components/Container/CallContainer/CallContainer';

const CallDetails = () => {
    const { id } = useParams()
    const data = callListData.find(item => item.id == id)
    const colorset = (item) => {
        if (item == "success") {
            return "text-[#05DF72] bg-gradient-to-r from-[#00c95034] to-[#00bc7d34] border-success"
        }
        else if (item == "danger") {
            return "text-[#FF0404] bg-gradient-to-r from-[#ff150033] to-[#fb2c3633] border-error"
        }
        else if (item == "info") {
            return "text-[#51A2FF] bg-gradient-to-r from-[#2b80ff33] to-[#00b7db33] border-info"
        }
        else {
            return "text-[#FF8904] bg-gradient-to-r from-[#ff6a0033] to-[#fb2c3633] border-warm"
        }
    }

    return (
        <CallContainer>
            <h1 className='px-2 md:px-3 lg:px-4 text-lg font-normal text-white py-2 md:py-3 lg:py-4'>Call Details</h1>

            {
               
                <div className='border-t-[2px] border-[#2b80ff35] pl-4 pr-8 pt-4 pb-3 md:pl-6 md:pr-10 md:pt-6 md:pb-5'>


                    <div className="grid grid-cols-2 gap-y-6 mb-6">
                        <div>
                            <p className="text-sm text-[#90A1B9] font-normal">Phone Number</p>
                            <p className="text-base font-normal text-white">{data.phone}</p>
                        </div>
                        <div>
                            <p className="text-sm text-[#90A1B9] font-normal">Duration</p>
                            <p className="text-base font-normal text-white">{data.time}</p>
                        </div>
                        <div>
                            <p className="text-sm text-[#90A1B9] font-normal">Date & Time</p>
                            <p className="text-base font-normal text-white">{data.date}</p>
                        </div>
                        <div>
                            <p className="text-sm text-[#90A1B9] font-normal">Issue Type</p>
                            <p className="text-base font-normal text-white">{data.tagType}</p>
                        </div>
                    </div>

                  
                    <div className="mb-6 space-y-4">
                        <div>
                            <p className="text-sm text-[#90A1B9] font-normal mb-1">Call Type</p>
                            <div className={`w-[105px] text-center px-3 py-1 border-[2px]
                        text-[#05DF72] bg-gradient-to-r from-[#00c95034] to-[#00bc7d34] border-success
                                      ${colorset(data.resultType)}     
                                         text-xs font-normal rounded-[10px]`}>{data.result}</div>
                        </div>
                        <div>
                            <p className="text-sm text-[#90A1B9] font-normal mb-1">Outcome</p>
                            <p className="text-base text-white font-normal">{data.statusText}</p>
                        </div>
                    </div>

                 
                    <button className="w-full bg-gradient-to-r from-[#ac46ff33] to-[#f6339b33] hover:bg-[rgba(172,70,255,0.1)] cursor-pointer duration-200 py-3 rounded-[14px] flex items-center justify-center gap-2 mb-6 border-[2px] border-[#ac46ff4d]">
                        <Play size={18} className='text-[#C27AFF]' />
                        <span className="text-base font-normal text-[#C27AFF]">Play Audio Recording</span>
                    </button>

                    
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-[#51A2FF] mb-4">
                            <FileText size={18} />
                            <h3 className="text-base font-normal text-white">Conversation Transcript</h3>
                        </div>

                        <div className="bg-[#1d293d80] rounded-[14px] p-4 space-y-3">
                            {data.transcripts.map((line, index) => (
                                <div key={index} className="space-y-1">
                                    <p className={`text-base font-normal ${line.sender === 'AI Assistant' ? 'text-[#05DF72]' : 'text-[#51A2FF]'}`}>
                                        {line.sender}:
                                    </p>
                                    <p className="text-sm font-medium leading-relaxed text-white">
                                        {line.message}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }

        </CallContainer>
    );
};

export default CallDetails;