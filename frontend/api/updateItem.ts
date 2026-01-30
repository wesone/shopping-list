import { mutate } from 'swr';
import request from './request';
import type { ShoppingItem } from '@/components/Item';

export default function updateItem(id: string, bought: boolean) {
    return mutate<ShoppingItem[]>(
        '/items', 
        () => request('put', `/items/${id}`, { bought }),
        { 
            optimisticData(currentItems) {
                if (!currentItems)
                    return [];

                const items = [...currentItems];
                const itemIndex = items.findIndex(item => item.id === id);
                items.splice(itemIndex, 1, { ...items[itemIndex], bought });
                return items; 
            }, 
            rollbackOnError: true,
            populateCache: false,
            revalidate: false
        }
    );
}
