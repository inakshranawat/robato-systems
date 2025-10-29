import express from "express";
import { submitTrial, getAllTrials, deleteTrial } from "../controllers/trialController.js";

const router = express.Router();

router.post("/trial", submitTrial);     // client form submission
router.get("/trials", getAllTrials);    // admin fetch
router.delete("/trials/:id", deleteTrial); // admin delete

export default router;
