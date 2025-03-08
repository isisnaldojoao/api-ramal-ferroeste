import express from 'express';
import excelRoutes from './routes/excelRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());

// Rota inicial para testar a API
app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api', excelRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
