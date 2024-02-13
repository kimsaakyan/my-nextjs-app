import SignUp from '@/components/auth/SignUp';
import React from 'react';

const SignUpPage = () => {
    return (
        <div className="bg-[url('/images/bgImgForSignupForm.png')] bg-cover bg-center h-screen w-full flex justify-center items-center">
            <SignUp />
        </div>
    );
};

export default SignUpPage;
