'use client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { addProduct } from '@/lib/slices/productsSlice';
import { MdOutlineClose } from 'react-icons/md';

const NewProduct = ({ toggleModal, isModalVisibility }) => {
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: '',
            rating: 0,
            brand: '',
            category: '',
            thumbnail: '/avatar.png',
        },
        onSubmit: (values) => {
            dispatch(addProduct(values));
        },
    });

    const clickHandler = () => {
        toggleModal(!isModalVisibility);
    };

    const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
        formik;

    return (
        <div className="w-full h-full fixed z-50 flex justify-center items-center top-0 left-0 bg-black/50 ">
            <div className="bg-white p-10 rounded-md relative overflow-y-scroll h-[500px]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-12">
                    <div div className="flex flex-col gap-4">
                        <h3 className="text-xl">Create new product</h3>
                        <div className="flex flex-col gap-4 w-[250px] sm:w-[370px]">
                            <div className="flex flex-col">
                                <label
                                    htmlFor="title"
                                    className="text-sm text-[#9FA9BA]"
                                >
                                    Title
                                </label>
                                <input
                                    className="border rounded h-[36px] px-4 py-2 focus:outline-none"
                                    type="text"
                                    name="title"
                                    value={values.title}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="Enter the product title here"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="description"
                                    className="text-sm text-[#9FA9BA]"
                                >
                                    Description
                                </label>

                                <textarea
                                    name="description"
                                    cols="60"
                                    rows="10"
                                    className="border rounded h-[36px] px-4 py-2 focus:outline-none"
                                    value={values.description}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="Provide a detailed description of the product"
                                ></textarea>
                            </div>

                            <div className="flex flex-col">
                                <label
                                    htmlFor="price"
                                    className="text-sm text-[#9FA9BA]"
                                >
                                    Price
                                </label>
                                <input
                                    className="border rounded h-[36px] px-4 py-2 focus:outline-none"
                                    type="number"
                                    name="price"
                                    value={values.price}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="Set the price in USD"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="brand"
                                    className="text-sm text-[#9FA9BA]"
                                >
                                    Brand
                                </label>
                                <input
                                    className="border rounded h-[36px] px-4 py-2 focus:outline-none"
                                    type="text"
                                    name="brand"
                                    value={values.brand}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="Specify the product brand"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="category"
                                    className="text-sm text-[#9FA9BA]"
                                >
                                    Category
                                </label>

                                <select
                                    name="category"
                                    className="border rounded h-[36px] px-4 py-2 focus:outline-none"
                                    value={values.category}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>
                                        Select the product category
                                    </option>
                                    <option value="smartphones">
                                        Smartphones
                                    </option>
                                    <option value="some">Some</option>
                                    <option value="Other">some</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mr-2 mb-4 uppercase rounded-md bg-emerald-400 py-2 px-8 text-sm text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-emerald-500"
                    >
                        Create product
                    </button>
                </form>
                <button
                    type="submit"
                    className="flex items-center justify-center uppercase rounded-md top-2 right-2 absolute bg-red-400 w-10 h-10 text-sm text-center text-white transition duration-150 ease-in-out hover:bg-red-500"
                    onClick={clickHandler}
                >
                    <MdOutlineClose size={25} />
                </button>
            </div>
        </div>
    );
};

export default NewProduct;
