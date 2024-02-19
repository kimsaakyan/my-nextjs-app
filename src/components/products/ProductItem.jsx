import React from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { deleteProduct } from '@/lib/slices/productsSlice';
import { MdDeleteForever } from 'react-icons/md';
import Link from 'next/link';

const ProductItem = ({ id, title, description, price, thumbnail }) => {
    const dispatch = useAppDispatch();

    const clickHandler = (productID) => {
        dispatch(deleteProduct(productID));
    };

    return (
        <div className="bg-white flex flex-wrap items-center justify-center md:justify-between gap-16 p-10 px-20 w-full shadow-md rounded-md relative">
            <div className="flex flex-col gap-4 text-gray-600">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="w-[320px]">{description}</p>
                <p className="text-4xl font-bold">{price} $</p>
                <div className="flex">
                    <Link href={`/dashboard/products/${id}`} className="mr-2 mb-4 flex items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white">
                        Edit
                    </Link>
                    <button className="mr-2 mb-4 flex items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white">
                        Preview
                    </button>
                </div>
            </div>
            <div className="">
                <img
                    src={thumbnail}
                    alt=""
                    className="block w-[250px] h-[250px] shadow-lg p-4 rounded-md object-contain"
                />
            </div>
            <button
                className="absolute top-2 right-2 rounded-md border p-1 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white"
                onClick={() => clickHandler(id)}
            >
                <MdDeleteForever size={25} />
            </button>
        </div>
    );
};

export default ProductItem;
