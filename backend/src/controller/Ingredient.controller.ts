import {Router} from 'express';

const router = Router({mergeParams: true});

/* /Ingredients */

router.get('/', (req, res) => {
    res.send('Hello get');
});

router.post('/', (req, res) => {
    res.send('Hello post');
});

/* /Ingredients/:name */

router.get('/:name', (req, res) => {
    res.send(`Hello get ${req.params.name}`);
});

router.put('/:name', (req, res) => {
    res.send(`Hello put ${req.params.name}`);
});

router.delete('/:name', (req, res) => {
    res.send(`Hello delete ${req.params.name}`);
});

export const IngredientController = router;