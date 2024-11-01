import 'dotenv/config';
import express from 'express';
import Router from './routes/routes.index.js';
import path from 'path';
import { connectDB } from './db/dbConnect.js';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 7000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes
app.use("/", Router);

// Setup EJS
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, 'views'));

// static files with cache control and ETag enabled
app.use(express.static(path.resolve(__dirname, '../public'), {
    maxAge: '30m', 
    etag: true    
}));

// Database connection
connectDB().then(() => {
    app.listen(PORT, () => { console.log(`Server started at port ${PORT}`); });
});
