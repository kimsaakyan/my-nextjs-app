'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useFormik } from 'formik';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import signInValidation from '@/validations/signInValidation';
import { signIn } from 'next-auth/react';

const SignIn = () => {
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(false);

    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: signInValidation,
        onSubmit: async (values) => {
            try {
                setPending(true);

                const response = await signIn('credentials', {
                    email: values.email,
                    password: values.password,
                    redirect: false,
                });

                if (response.error) {
                    setError('Invalid Credentials.');
                    setPending(false);
                    return;
                } else {
                    router.replace('/');
                }
            } catch (error) {
                console.log(error.message);
                setError('An error occurred. Please try again.');
            } finally {
                setPending(false);
            }
        },
    });

    const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
        formik;

    const allFieldsFilled = Object.values(values).every(
        (value) => value.trim() !== ''
    );

    return (
        <div className="bg-white bg-opacity-95 w-[300px] md:w-2/3 flex justify-center rounded-sm border py-2">
            <div className="flex flex-col justify-between w-[370px] px-4">
                <h3 className="text-4xl py-8 mx-auto">
                    <Image src="/logo.svg" width={104} height={40} />
                </h3>
                <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-bold">Sign In</h4>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4"
                    >
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
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <div className="text-red-400 font-semibold text-xs pl-1 pt-1">
                                {errors.email && touched.email
                                    ? errors.email
                                    : null}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="password"
                                className="text-sm text-[#9FA9BA] "
                            >
                                Password
                            </label>
                            <input
                                className="border rounded h-[36px] px-4 focus:outline-none"
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <div className="text-red-400 font-semibold text-xs pl-1 pt-1">
                                {errors.password && touched.password
                                    ? errors.password
                                    : null}
                            </div>
                            <p className="text-xs text-[#777777] leading-6">
                                <a href="#" className="">
                                    Forgot password?
                                </a>
                            </p>
                        </div>
                        <button
                            type="submit"
                            className={`w-[145px] h-[45px]  ${
                                allFieldsFilled ? 'bg-red-500' : 'bg-[#777777]'
                            } uppercase text-white font-bold mx-auto my-4`}
                        >
                            {pending ? 'Loading...' : 'Sign in'}
                        </button>
                        <p className="text-sm text-center">
                            Don’t have an account yet?{' '}
                            <Link href="/signUp" className="text-red-500">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
