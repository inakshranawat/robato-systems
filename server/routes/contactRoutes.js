import express from 'express';
import {
  submitContact,
  getAllContacts,
  deleteContact,
} from '../controllers/contactController.js';

const router = express.Router();

// Submit new contact form
router.post('/contact', submitContact);

// Get all contact submissions (for admin)
router.get('/contacts', getAllContacts);

// Delete a specific contact submission
router.delete('/contacts/:id', deleteContact);

export default router;
