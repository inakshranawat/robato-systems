import Trial from "../models/Trial.js";
import { sendTrialEmail } from "../utils/sendEmail.js";

// 📩 Create a trial submission
export const submitTrial = async (req, res) => {
  try {
    const trial = await Trial.create(req.body);
    await sendTrialEmail(req.body);
    res.status(200).json({ message: "Trial form submitted successfully", trial });
  } catch (err) {
    console.error("Trial submission error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// 📋 Get all trial submissions (for admin)
export const getAllTrials = async (req, res) => {
  try {
    const trials = await Trial.find().sort({ createdAt: -1 });
    res.status(200).json(trials);
  } catch (err) {
    console.error("Error fetching trials:", err);
    res.status(500).json({ message: "Error fetching trials", error: err.message });
  }
};

// 🗑️ Delete a trial submission
export const deleteTrial = async (req, res) => {
  try {
    const { id } = req.params;
    await Trial.findByIdAndDelete(id);
    res.status(200).json({ message: "Trial deleted successfully" });
  } catch (err) {
    console.error("Delete trial error:", err);
    res.status(500).json({ message: "Error deleting trial", error: err.message });
  }
};
