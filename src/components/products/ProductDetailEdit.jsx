'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useParams } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { getProduct } from '@/lib/slices/productsSlice';
import { useEffect } from 'react';
import { activeProduct } from '@/lib/slices/productsSlice';
import { updateProduct } from '@/lib/slices/productsSlice';

const ProductDetailEdit = () => {
    const dispatch = useAppDispatch();
    const { productID } = useParams();

    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        dispatch(getProduct(productID));
    }, [dispatch, productID]);

    const product = useAppSelector(activeProduct);

    useEffect(() => {
        if (product) {
            formik.resetForm({
                values: {
                    title: product.title || '',
                    description: product.description || '',
                    price: product.price || '',
                },
            });
        }
    }, [product]);

    const formik = useFormik({
        initialValues: {
            title: product?.title,
            description: product?.description,
            price: product?.price,
        },
        onSubmit: (values) => {
            dispatch(updateProduct({ productID, values }));
        },
    });

    const { values, handleSubmit, handleChange, handleBlur } = formik;

    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white border rounded-md">
            <div className="container px-5 py-24 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="lg:w-4/5 mx-auto flex flex-wrap gap-16 justify-center">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 object-contain object-center rounded"
                            src={product?.thumbnail}
                        />
                        <div className="">
                            <div className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {isEdit ? (
                                    <div className="flex flex-col gap-1">
                                        <label
                                            htmlFor="title"
                                            className="text-sm text-[#9FA9BA]"
                                        >
                                            Title
                                        </label>
                                        <input
                                            className="border rounded h-[36px] w-[370px] px-4 py-2 focus:outline-none text-sm"
                                            type="text"
                                            name="title"
                                            value={values.title}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                            BRAND NAME
                                        </h2>
                                        <p>{values.title}</p>
                                    </>
                                )}
                            </div>

                            <div className="">
                                {isEdit ? (
                                    <div className="flex flex-col gap-1">
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
                                            className="border rounded min-h-[36px] h-[36px] w-[370px] px-4 focus:outline-none text-sm"
                                            value={values.description}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                ) : (
                                    values.description
                                )}
                            </div>

                            <div className="mt-6  pb-5 border-b-2 border-gray-200 mb-5 w-[370px]"></div>
                            <div className="flex justify-between items-center w-[370px]">
                                <div className="title-font font-medium text-2xl text-gray-900">
                                    {isEdit ? (
                                        <div className="flex flex-col">
                                            <input
                                                className="border rounded h-[36px] w-[90px] px-4 py-2 focus:outline-none text-sm"
                                                type="number"
                                                name="price"
                                                value={values.price}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    ) : (
                                        <span>{values.price}$</span>
                                    )}
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setIsEdit(!isEdit)}
                                        className="flex  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                                    >
                                        {isEdit ? 'Cancel' : 'Edit'}
                                    </button>
                                    <button
                                        onClick={() => setIsEdit(false)}
                                        disabled={!formik.dirty}
                                        className={`flex text-white  border-0 py-2 px-6 focus:outline-none  rounded ${
                                            !formik.dirty ? 'bg-black' : 'bg-red-500'
                                        }`}
                                        type="submit"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ProductDetailEdit;
