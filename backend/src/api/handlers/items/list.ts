import type { ObjectId } from 'mongoose';
import type { APIHandler } from '../../server.ts';
import ShoppingItem from '../../../repository/models/ShoppingItem.ts';

export default {
    method: 'get',
    route: '/items',
    handler: async (req, res) => {
        const shoppingItems = await ShoppingItem.find()
            .sort({createdAt: -1})
            .lean({
                versionKey: false, 
                transform(doc) {
                    doc.id = (doc._id as ObjectId).toString();
                    delete doc._id;
                }
            })
            .exec();
        
        res.json(shoppingItems).end();
    }
} as APIHandler;
