import express from 'express';
import cors from 'cors';
import { AppConfig } from './config';

const app = express();

app.use(cors());

const PORT = process.env.PORT || AppConfig.PORT;

app.listen(PORT, () => {
  console.info(`App is running on PORT: ${PORT}`);
});
