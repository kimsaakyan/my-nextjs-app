import React from 'react';
import { SiSimpleanalytics } from 'react-icons/si';

const DataOverview = () => {
    return (
        <div className="flex flex-col gap-6 h-full">
            <h3 className="font-bold">Your Profile</h3>
            <div className="flex justify-center items-center bg-white border rounded-md p-10 h-full">
                <div className="flex flex-col items-center w-[368px] gap-12">
                    <SiSimpleanalytics size={40} />
                    <div className="flex flex-col">
                        <p className="text-xl text-center">No Data To Show</p>
                        <p className="text-center text-sm">
                            There are many ways to market a product or a service
                            and providing the potential clients and customers
                            with testimonials is one of the best ways to market.
                        </p>
                    </div>
                    <button className="bg-red-500 text-white w-[145px] h-[45px] mx-auto uppercase">
                        Add campaign
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DataOverview;
