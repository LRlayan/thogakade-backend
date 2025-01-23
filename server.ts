import express from 'express';
import {CustomerRouter} from "./routes/CustomerRoutes";
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cors({
    origin: 'http://localhost:5175',
    method: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/customer',CustomerRouter);

app.listen(3002, () => console.log("Server start 3002 port"));