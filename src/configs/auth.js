import CredentialsProvider from 'next-auth/providers/credentials';
import UserModel from '../../models/userModel';
import bcrypt from 'bcrypt';
import { connectToDB } from '../../utils/connection';

async function login(credentials) {
    try {
        await connectToDB();

        const user = await UserModel.findOne({ email: credentials.email });
        if (!user) {
            throw new Error('Wrong Credentials.');
        }

        const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.password
        );

        if (!isCorrectPassword) {
            throw new Error('Wrong Credentials. password');
        }

        return user;
    } catch (error) {
        throw new Error('Failed to login.');
    }
}

export const authConfig = {
    pages: {
        signIn: '/signIn',
    },
    providers: [
        CredentialsProvider({
            credentials: {},
            async authorize(credentials) {
                if (!credentials.email || !credentials.password) {
                    return null;
                }

                const user = await login(credentials);
                return user;
            },
        }),
    ],
};
