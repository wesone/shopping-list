import mongoose from 'mongoose';

export const connect = () => {
    if (!process.env.MONGO_CONNECTION_STRING)
        throw new Error('MONGO_CONNECTION_STRING is not defined');
    mongoose.connect(process.env.MONGO_CONNECTION_STRING);
};

export const disconnect = async () => {
    await mongoose.disconnect();
};
