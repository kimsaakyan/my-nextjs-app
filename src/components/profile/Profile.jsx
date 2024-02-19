import Image from 'next/image';
import BillingInformations from './BillingInformations';
import UserProfile from './UserProfile';

const Profile = () => {
    return (
        <div className="flex flex-col gap-6 h-full">
            <h3 className="font-bold">Your Profile</h3>
            <div className="flex flex-wrap xl:justify-center gap-16 bg-white border rounded-md p-10 h-full">
                <div className="mt-10">
                    <Image src="/avatar.png" width="224" height="224" />
                </div>

                <div className="flex flex-wrap gap-16">
                    <UserProfile />
                    <BillingInformations />
                </div>
            </div>
        </div>
    );
};

export default Profile;
