'use client';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { getAllProducts } from '@/lib/slices/productsSlice';
import NewProduct from './NewProduct';
import ProductItem from './ProductItem';

const ProductsList = () => {
    const dispatch = useAppDispatch();
    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    const { products, status, error } = useAppSelector(
        (state) => state.products
    );

    const onClickHandler = () => {
        setIsAddProductModalOpen(true);
    };

    return (
        <div className="flex flex-col items-center">
            <button
                onClick={onClickHandler}
                className="w-[300px] rounded-md bg-emerald-400 py-2 px-8 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-emerald-500"
            >
                Add Product
            </button>
            <div>
                {isAddProductModalOpen && (
                    <NewProduct
                        toggleModal={setIsAddProductModalOpen}
                        isModalVisibility={isAddProductModalOpen}
                    />
                )}
            </div>

            <div className="w-full mt-6 flex flex-wrap gap-4">
                {products?.map((product) => (
                    <ProductItem key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
