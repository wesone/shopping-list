import z from 'zod';
import validate from '../../utils/validate.ts';
import type { APIHandler } from '../../server.ts';
import ShoppingItem from '../../../repository/models/ShoppingItem.ts';

export default {
    method: 'post',
    route: '/items',
    handler: async (req, res) => {
        const { name } = validate(
            z.object({
                name: z.string()
            }),
            req.body
        );

        const shoppingItem = new ShoppingItem({ name });
        await shoppingItem.save();

        res.status(200).end();
    }
} as APIHandler;
