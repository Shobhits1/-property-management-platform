import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check route
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Real Estate API Server is running' });
});

// TODO: Add your API routes here
// Example:
// app.use('/api/properties', propertyRoutes);
// app.use('/api/tenants', tenantRoutes);
// app.use('/api/managers', managerRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

export default app;
