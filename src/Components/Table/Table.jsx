import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const repairAppointments = [
    { id: 1, clientName: "Jane.D", clientPhone: "01960685765", clientEmail: "admin@gmail.com", device: "Apple/Iphone 13pro", repairType: "Screen", date: "02/06/2026", slotNo: 1, startTime: "09:00" },
    { id: 2, clientName: "Jane.D", clientPhone: "01960685765", clientEmail: "admin@gmail.com", device: "Apple/Iphone 13pro", repairType: "Screen", date: "02/06/2026", slotNo: 1, startTime: "10:00" },
    { id: 3, clientName: "Jane.D", clientPhone: "01960685765", clientEmail: "admin@gmail.com", device: "Apple/Iphone 13pro", repairType: "Screen", date: "02/06/2026", slotNo: 1, startTime: "11:00" },
    { id: 4, clientName: "Jane.D", clientPhone: "01960685765", clientEmail: "admin@gmail.com", device: "Apple/Iphone 13pro", repairType: "Screen", date: "02/06/2026", slotNo: 1, startTime: "12:00" },
    { id: 5, clientName: "Jane.D", clientPhone: "01960685765", clientEmail: "admin@gmail.com", device: "Apple/Iphone 13pro", repairType: "Screen", date: "02/06/2026", slotNo: 1, startTime: "02:00" },
    { id: 6, clientName: "Jane.D", clientPhone: "01960685765", clientEmail: "admin@gmail.com", device: "Apple/Iphone 13pro", repairType: "Screen", date: "02/06/2026", slotNo: 1, startTime: "03:00" },
];
const Table = () => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table text-center table-xs">
                    <thead>
                        <tr className='text-sm font-normal text-white bg-base-200 h-[60px]'>
                            <th>Client Name</th>
                            <th>Client Phone</th>
                            <th>Client mail</th>
                            <th>Device</th>
                            <th>Repair Type</th>
                            <th>Date</th>
                            <th>Slot no</th>
                            <th>Start Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            repairAppointments.map(item => (
                                <tr className='bg-base-200 h-[60px]'>
                                    <th className='text-sm font-normal text-[#51A2FF]'>{item.clientName}</th>
                                    <td className='text-sm font-normal text-[#CFCFCF]'>{item.clientPhone}</td>
                                    <td className='text-sm font-normal text-[#FFFFFF]'>{item.clientEmail}</td>
                                    <td className='text-sm font-normal text-[#CFCFCF]'>{item.device}</td>
                                    <td className='text-sm font-normal text-[#CFCFCF]'>{item.repairType}</td>
                                    <td className='text-sm font-normal text-[#CFCFCF]'>{item.date}</td>
                                    <td className='text-sm font-normal text-[#CFCFCF]'>{item.slotNo}</td>
                                    <td className='text-sm font-normal text-[#CFCFCF]'>{item.startTime}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
            <div className='flex justify-center items-center'>
                <button className="flex items-center gap-3 text-blue-600 hover:text-blue-300 transition-colors">
                    <ChevronLeft size={20} />
                    <span className="mr-1 text-lg">Previous</span>

                </button>
                <div className="flex items-center space-x-1 mx-4">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <button
                            key={num}
                            className={`w-10 h-10 flex items-center justify-center rounded-sm text-lg font-medium transition-all
                hover:bg-blue-300 text-blue-700`}
                        >
                            {num}
                        </button>
                    ))}
                    <span className="text-blue-600 px-2 text-xl font-bold">...</span>
                    <button className="w-10 h-10 flex items-center justify-center text-blue-600 text-lg font-medium">11</button>
                </div>

                <button className="flex gap-3 items-center text-blue-600 hover:text-blue-300 transition-colors">

                    <ChevronRight size={20} />
                    <span className="mr-1 text-lg">Next</span>
                </button>
            </div>

        </>
    );
};

export default Table;