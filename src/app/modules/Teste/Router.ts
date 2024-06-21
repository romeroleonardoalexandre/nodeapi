import { Router, request, response } from 'express';
import { name } from "../../../utils/exporter.js";

const router = Router();

router.get('/', (request, response) => {
    response.json({
        _id: 'ABC123',
        name: name,
        price: 28.90
    });
});

export default router;