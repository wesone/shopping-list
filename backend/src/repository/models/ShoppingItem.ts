import { Schema, model } from 'mongoose';

const shoppingItemSchema = new Schema(
    {
        name: { type: String, required: true },
        bought: { type: Boolean, required: true, default: false }
    },
    { 
        timestamps: { createdAt: true, updatedAt: false },
        toObject: { versionKey: false }
     }
);

const ShoppingItem = model('ShoppingItem', shoppingItemSchema);

export default ShoppingItem;
