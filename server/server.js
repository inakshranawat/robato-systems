import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import path from 'path';

// Routes
import contactRoutes from './routes/contactRoutes.js';
import trialRoutes from './routes/trialRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import sitemapRoute from './routes/sitemapRoutes.js';

import routesApi from './routes/routesApi.js';


import blogRoutes from './routes/blogRoutes.js'; // <-- IMPORTANT: import blogRoutes
import uploadRoutes from './routes/uploadRoutes.js';


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Static uploads folder
app.use('/uploads', express.static(path.join(path.resolve(), 'uploads')));

// Blog Routes
app.use("/api/blogs", blogRoutes);

// Sitemap Route
app.use('/sitemap.xml', sitemapRoute);

app.use('/api/routes', routesApi);


// Contact & Trial Routes
app.use('/api', contactRoutes);
app.use('/api', trialRoutes);

app.use('/api/upload', uploadRoutes);


// Admin Routes
app.use('/api/admin', adminRoutes);

// Default Route
app.get("/", (req, res) => res.send("Blog API is running"));

// Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
