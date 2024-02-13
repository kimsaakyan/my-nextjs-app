import SignIn from '@/components/auth/SignIn';
import Image from 'next/image';
import React from 'react';

const SignInPage = () => {
    return (
        <div className="bg-[url('/images/bgImgForSigninForm.png')] bg-cover bg-center h-screen w-full flex justify-center items-center">
            <SignIn />
        </div>
    );
};

export default SignInPage;
