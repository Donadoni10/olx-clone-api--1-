//importando através de modulo:
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fileupload from "express-fileupload";
import { fileURLToPath, fileURLToath } from 'url';
import { dirname } from 'path';
import fileUpload from 'express-fileupload';
import userRoutes from './routes/userRoutes';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());
server.use(fileUpload());

server.use(express.static(__dirname + 'public'));

server.use('/', userRoutes);

server.listen(process.env.PORT, () => {
    console.log(`Rodando na porta: ${process.env.BASE}`);
});