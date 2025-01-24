import express from 'express';
import {CustomerRoutes} from "./routes/CustomerRoutes";
import {ItemRoutes} from "./routes/ItemRoutes";
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cors({
    origin: 'http://localhost:5175',
    method: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/customer',CustomerRoutes);
app.use('/item',ItemRoutes);

app.listen(3002, () => console.log("Server start 3002 port"));