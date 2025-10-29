import Contact from '../models/Contact.js';
import { sendContactEmail } from '../utils/sendEmail.js';

export const submitContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    await sendContactEmail(req.body);
    res.status(200).json({ message: 'Contact form submitted successfully', contact });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


// ✅ New controller for getting all contact submissions (for admin)
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contacts', error });
  }
};

// Delete a specific contact submission
export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

