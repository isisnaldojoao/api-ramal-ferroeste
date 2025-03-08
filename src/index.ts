import express from 'express';
import excelRoutes from './routes/excelRoutes';

import yamljs from 'yamljs';
const swaggerFile = yamljs.load('./swagger.yaml');

const app = express();
const PORT = 3000;

import swaggerUi from 'swagger-ui-express';
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());

// Rota inicial para testar a API
app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api', excelRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
