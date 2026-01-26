import { useState } from 'react';
import Fab from '@mui/material/Fab';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import ItemAddForm from '@/components/adding/ItemAddForm';

export default function ItemAddDialog() {
    const [showForm, setShowForm] = useState(false);
    
    const handleClose = () => setShowForm(false);

    return (
        <>
            <Dialog open={showForm} onClose={handleClose}>
                <DialogTitle>Neuen Artikel hinzufügen</DialogTitle>
                <IconButton
                    onClick={handleClose}
                    aria-label="schließen"
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    <ItemAddForm onAdded={handleClose} />
                </DialogContent>
            </Dialog>
            <Fab 
                color="primary" 
                sx={{ position: 'absolute', bottom: 32, right: 32 }} 
                aria-label="hinzufügen"
                title="Neuen Artikel hinzufügen"
                onClick={() => setShowForm(true)}
            >
                <AddIcon />
            </Fab>
        </>
    );
}
