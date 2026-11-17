import { fetchRandomMeal, fetchMealsWithQuery } from '../util/fetchMealsUtil.js';
import { Router } from 'express';

const router = Router();

router.get('/api/meals/random', async (req, res) => {    
    res.send({ data: await fetchRandomMeal() });
});

router.get('/api/meals', async (req, res) => {
    res.send({ data: await fetchMealsWithQuery(req.query.search)})
});

export default router;