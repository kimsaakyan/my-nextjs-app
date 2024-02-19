'use client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { FaRegSave } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

const BillingInformations = () => {
    const [isEditable, setIsEditable] = useState({});

    const formik = useFormik({
        initialValues: {
            companyName: 'example',
            address: '',
        },
        onSubmit: (values) => {
        },
    });

    const toggleIsEditable = (prop) => {
        setIsEditable((prevState) => {
            return {
                ...prevState,
                [prop]: !prevState[prop],
            };
        });
    };

    const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
        formik;

    return (
        <form onSubmit={handleSubmit}>
            <div div className="flex flex-col gap-4">
                <h3 className="text-xl">Billing Informations</h3>
                <div className="flex flex-col gap-4 w-[370px]">
                    {isEditable.companyName ? (
                        <div className="flex flex-col">
                            <label
                                htmlFor="companyName"
                                className="text-sm text-[#9FA9BA]"
                            >
                                Company Name
                            </label>
                            <div className="flex gap-2">
                                <input
                                    className="border rounded h-[36px] px-4 focus:outline-none w-full pb-1"
                                    type="text"
                                    name="companyName"
                                    value={values.companyName}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <button
                                    onClick={() =>
                                        toggleIsEditable('companyName')
                                    }
                                >
                                    <FaRegSave />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <p className="text-sm text-[#9FA9BA]">
                                Company Name
                            </p>
                            <div className="flex gap-2 rounded-sm">
                                <p className="bg-gray-200 rounded h-[36px] px-4 w-full pt-1">
                                    {values.companyName}
                                </p>
                                <button
                                    onClick={() =>
                                        toggleIsEditable('companyName')
                                    }
                                >
                                    <FaEdit />
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="flex flex-col">
                        <label
                            htmlFor="address"
                            className="text-sm text-[#9FA9BA]"
                        >
                            Address
                        </label>
                        <input
                            className="border rounded h-[36px] px-4 focus:outline-none"
                            type="text"
                            name="address"
                            value={values.address}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default BillingInformations;
