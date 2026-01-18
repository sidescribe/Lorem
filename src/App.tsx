import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Grid,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Alert,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  People as PeopleIcon,
  Business as BusinessIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

interface Contact {
  id: string;
  name: string;
  email: string;
  company: string;
  status: 'active' | 'inactive';
}

function App() {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: '1', name: 'John Doe', email: 'john@example.com', company: 'Tech Corp', status: 'active' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', company: 'Startup Inc', status: 'active' },
  ]);

  const [open, setOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', status: 'active' });
  const [message, setMessage] = useState('');
  const [clickCount, setClickCount] = useState(0);

  const handleOpenDialog = (contact?: Contact) => {
    if (contact) {
      setEditingContact(contact);
      setFormData({
        name: contact.name,
        email: contact.email,
        company: contact.company,
        status: contact.status,
      });
    } else {
      setEditingContact(null);
      setFormData({ name: '', email: '', company: '', status: 'active' });
    }
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setEditingContact(null);
  };

  const handleSubmit = () => {
    if (editingContact) {
      setContacts(contacts.map(c =>
        c.id === editingContact.id
          ? { ...c, ...formData }
          : c
      ));
      setMessage('Contact updated successfully!');
    } else {
      const newContact: Contact = {
        id: Date.now().toString(),
        ...formData as Omit<Contact, 'id'>,
      };
      setContacts([...contacts, newContact]);
      setMessage('Contact added successfully!');
    }
    handleCloseDialog();
    setTimeout(() => setMessage(''), 3000);
  };

  const handleDelete = (id: string) => {
    setContacts(contacts.filter(c => c.id !== id));
    setMessage('Contact deleted successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
    setMessage(`Button clicked ${clickCount + 1} times!`);
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto', bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
        CRM Application Demo
      </Typography>

      {message && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {message}
        </Alert>
      )}

      {/* Demo Buttons Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          🎯 Interactive Demo - Working Buttons & State
        </Typography>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
              startIcon={<AddIcon />}
            >
              Click Me! ({clickCount})
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setMessage('Secondary button clicked!')}
            >
              Secondary Action
            </Button>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary">
          These buttons demonstrate real state management and event handlers!
        </Typography>
      </Paper>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <PeopleIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
              <Typography variant="h4">{contacts.length}</Typography>
              <Typography color="text.secondary">Total Contacts</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <BusinessIcon sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
              <Typography variant="h4">{contacts.filter(c => c.status === 'active').length}</Typography>
              <Typography color="text.secondary">Active Contacts</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <ScheduleIcon sx={{ fontSize: 40, color: 'info.main', mb: 1 }} />
              <Typography variant="h4">{clickCount}</Typography>
              <Typography color="text.secondary">Button Clicks</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Contacts Management */}
      <Paper sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h5">
            📋 Contacts Management - Full CRUD Demo
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
          >
            Add Contact
          </Button>
        </Box>

        <List>
          {contacts.map((contact) => (
            <ListItem
              key={contact.id}
              sx={{
                border: '1px solid #e0e0e0',
                borderRadius: 1,
                mb: 1,
                bgcolor: 'background.paper'
              }}
            >
              <ListItemText
                primary={
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="h6">{contact.name}</Typography>
                    <Chip
                      label={contact.status}
                      color={contact.status === 'active' ? 'success' : 'default'}
                      size="small"
                    />
                  </Box>
                }
                secondary={
                  <Box>
                    <Typography variant="body2">{contact.email}</Typography>
                    <Typography variant="body2" color="text.secondary">{contact.company}</Typography>
                  </Box>
                }
              />
              <Box>
                <IconButton onClick={() => handleOpenDialog(contact)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(contact.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Contact Form Dialog */}
      <Dialog open={open} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingContact ? 'Edit Contact' : 'Add Contact'}
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            margin="normal"
          />
          <TextField
            select
            fullWidth
            label="Status"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            margin="normal"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {editingContact ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default App;