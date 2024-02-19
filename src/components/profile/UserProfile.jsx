import React from 'react';

const UserProfile = () => {
    return (
        <form className="flex flex-wrap gap-16 ">
            <div className="flex flex-col gap-4">
                <h3 className="text-xl">My Profile</h3>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label
                            htmlFor="fullname"
                            className="text-sm text-[#9FA9BA]"
                        >
                            Full Name
                        </label>
                        <input
                            className="border rounded w-[370px] h-[36px] px-4 focus:outline-none"
                            type="text"
                            name="fullname"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="phoneNumber"
                            className="text-sm text-[#9FA9BA]"
                        >
                            Phone Number
                        </label>
                        <input
                            className="border rounded h-[36px] px-4 focus:outline-none"
                            type="text"
                            name="phoneNumber"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="text-sm text-[#9FA9BA]"
                        >
                            Email address
                        </label>
                        <input
                            className="border rounded h-[36px] px-4 focus:outline-none"
                            type="text"
                            name="email"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="password"
                            className="text-sm text-[#9FA9BA]"
                        >
                            Password
                        </label>
                        <input
                            className="border rounded h-[36px] px-4 focus:outline-none"
                            type="password"
                            name="password"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default UserProfile;
