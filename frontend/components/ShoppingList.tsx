import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Item from './Item';
import CircularProgress from '@mui/material/CircularProgress';
import useItems from '@/hooks/useItems';

export default function ShoppingList() {
    const { items } = useItems();

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, justifyItems: 'center' }}
            component="nav"
        >
            {
                !items
                    ? <CircularProgress />
                    : items.length
                        ? items.map((item) => (
                            <Item key={item.id} {...item} />
                        ))
                        : <ListItemText primary="Keine Artikel in der Liste." />
            }
        </List>
    );
}
