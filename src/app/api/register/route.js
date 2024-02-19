import UserModel from '../../../../models/userModel';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { connectToDB } from '../../../../utils/connection';

export async function POST(req) {
    try {
        await connectToDB();
        const { email, password } = await req.json();

        const userExists = await UserModel.findOne({ email });

        if (userExists) {
            return NextResponse.json(
                { message: 'User already exists.' },
                { status: 409 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await UserModel.create({ email, password: hashedPassword });

        return NextResponse.json(
            { message: 'User created successfully.' },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message:
                    'An error occurred during the user registration process.',
            },
            { status: 500 }
        );
    }
}
