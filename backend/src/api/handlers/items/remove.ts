import type { APIHandler } from '../../server.ts';
import ShoppingItem from '../../../repository/models/ShoppingItem.ts';
import NotFoundError from '../../errors/NotFoundError.ts';

export default {
    method: 'delete',
    route: '/items/:id',
    handler: async (req, res) => {
        const _id = req.params.id;

        const { deletedCount } = await ShoppingItem.deleteOne({ _id }).exec();

        if (!deletedCount)
            throw new NotFoundError(`Item with id '${_id}' not found`);
        
        res.status(200).end();
    }
} as APIHandler;
