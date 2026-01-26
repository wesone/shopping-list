import z from 'zod';
import validate from '../../utils/validate.ts';
import type { APIHandler } from '../../server.ts';
import ShoppingItem from '../../../repository/models/ShoppingItem.ts';
import NotFoundError from '../../errors/NotFoundError.ts';

export default {
    method: 'put',
    route: '/items/:id',
    handler: async (req, res) => {
        const payload = validate(
            z.object({
                bought: z.boolean()
            }),
            req.body
        );
        const _id = req.params.id;

        const { matchedCount } = await ShoppingItem.updateOne({ _id }, payload).exec();

        if (!matchedCount)
            throw new NotFoundError(`Item with id '${_id}' not found`);

        res.status(200).end();
    }
} as APIHandler;
