import { mutate } from 'swr';
import request from './request';
import type { ShoppingItem } from '@/components/Item';

export default function removeItem(id: string) {
    return mutate<ShoppingItem[]>(
        '/items',
        () => request('delete', `/items/${id}`),
        { 
            optimisticData(currentItems) {
                if (!currentItems)
                    return [];

                return [...currentItems].filter(item => item.id !== id);                
            }, 
            rollbackOnError: true,
            populateCache: false,
            revalidate: false
        }
    );
}
