import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';

const Filter = () => {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-center">
            <div className="col-span-12 md:col-span-6">
                <label className="input w-full border-[2px] bg-[#0f172b83] border-[#2b80ff35] text-[#62748E]
                      focus-within:outline-none focus-within:ring-0">
                    <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </g>
                    </svg>

                    <input
                        type="search"
                        placeholder="Search by phone number, issue type..."
                        className="w-full bg-transparent focus:outline-none focus:ring-0"
                    />
                </label>
            </div>

        
            <div className="col-span-12 md:col-span-6 flex justify-end gap-2 md:gap-4 lg:gap-6">

            
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn text-white border-[2px] border-[#2b80ff3a] bg-[#111B3D]"
                    >
                        All Type <MdArrowDropDown />
                    </div>
                    <ul
                        tabIndex={-1}
                        className="dropdown-content menu bg-[#111B3D] text-white rounded-box z-10 w-40 p-2 shadow"
                    >
                        <li><a>Type-A</a></li>
                        <li><a>Type-B</a></li>
                    </ul>
                </div>

            
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn text-white border-[2px] border-[#2b80ff3a] bg-[#111B3D]"
                    >
                        All Issues <MdArrowDropDown />
                    </div>
                    <ul
                        tabIndex={-1}
                        className="dropdown-content menu bg-[#111B3D] text-white rounded-box z-10 w-40 p-2 shadow"
                    >
                        <li><a>Bug</a></li>
                        <li><a>Testing</a></li>
                    </ul>
                </div>

              
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn text-white border-[2px] border-[#2b80ff3a] bg-[#111B3D]"
                    >
                        Today <MdArrowDropDown />
                    </div>
                    <ul
                        tabIndex={-1}
                        className="dropdown-content menu bg-[#111B3D] text-white rounded-box z-10 w-40 p-2 shadow"
                    >
                        <li><a>This Week</a></li>
                        <li><a>Last Month</a></li>
                    </ul>
                </div>

            </div>
        </div>

    );
};

export default Filter;