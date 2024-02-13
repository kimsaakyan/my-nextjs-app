import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Email address is required'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
    },

    {
        timestamps: true,
    }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
