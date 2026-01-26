import useSWR from 'swr';
import request from '../api/request';
import { ShoppingItem } from '@/components/Item';

const fetcher = (route: string) => request('GET', route);

export default function useItems() {
    const { data: items, ...response } = useSWR<ShoppingItem[]>('/items', fetcher);
    return { items, ...response };
}
