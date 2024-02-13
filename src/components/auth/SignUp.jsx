'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import signUpValidation from '@/validations/signUpValidation';

const SignUp = () => {
    const router = useRouter();
    const [pending, setPending] = useState(false);
    const [error, setError] = useState('false');

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeatPassword: '',
        },
        validate: signUpValidation,
        onSubmit: async (values) => {
            try {
                setPending(true);

                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
                });

                const data = await response.json();
                console.log(data);

                if (response.ok) {
                    console.log('Successfully registered');
                    formik.resetForm();
                    router.push('/signIn');
                } else {
                    console.error('Registration failed:', data.message);
                    setError(
                        data.message ||
                            'Something went wrong during registration. Please try again.'
                    );
                }
            } catch (error) {
                console.error('An error occurred during registration:', error);
                setError('A network error occurred. Please try again.');
            } finally {
                setPending(false);
            }
        },
    });

    const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
        formik;

    const allFieldsFilled = Object.values(values).every(
        (value) => value.trim() !== ''
    );

    return (
        <div className="bg-white bg-opacity-95 w-[300px] md:w-2/3 flex justify-center py-2 rounded-sm border">
            <div className="flex flex-col justify-between w-[370px] px-4">
                <h3 className="text-4xl py-6 mx-auto">
                    <Image src="/logo.svg" width={104} height={40} />
                </h3>
                <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-bold">Sign Up</h4>
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
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="password"
                                className="text-sm text-[#9FA9BA] "
                            >
                                Repeat Password
                            </label>
                            <input
                                className="border rounded h-[36px] px-4 focus:outline-none"
                                type="password"
                                name="repeatPassword"
                                value={values.repeatPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <div className="text-red-400 font-semibold text-xs pl-1 pt-1">
                                {errors.repeatPassword && touched.repeatPassword
                                    ? errors.repeatPassword
                                    : null}
                            </div>
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
                            Have an account?{' '}
                            <Link href="/signIn" className="text-red-500">
                                Sign In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
