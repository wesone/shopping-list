import { mutate } from 'swr';
import request from './request';
import type { ShoppingItem } from '@/components/Item';

export default function addItem(name: string) {
    return mutate<ShoppingItem[]>(
        '/items', 
        () => request('post', '/items', { name }),
        { 
            optimisticData(currentItems = []) {
                return [
                    { 
                        id: 'unknown', 
                        name, 
                        bought: false, 
                        createdAt: new Date().toISOString()
                    },
                    ...currentItems            
                ];                
            }, 
            rollbackOnError: true,
            populateCache: false
        }
    );
}
